const { parseJsonText } = require('typescript');

require('dotenv').config();


const Pool = require('pg').Pool;

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, LOCALPW } = process.env;
// const pool = new Pool({
//   host: PGHOST,
//   database: PGDATABASE,
//   user: PGUSER,
//   password: PGPASSWORD,
//   port: 5432,
//   ssl: {
//     require: true,
//   },
// });



const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'warriors_eats',
  password: LOCALPW,
  port: 5432,
});


const getEateries = (request, response) => {
  if (request.query.page_size != null && request.query.offset != null) {
    const page_size = parseInt(request.query.page_size);
    const offset = parseInt(request.query.offset);
    pool.query('SELECT * FROM eateries ORDER BY id DESC LIMIT $1 OFFSET $2', [page_size, offset], (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
  } else {
    pool.query('SELECT * FROM eateries ORDER BY name DESC', (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
  }
};

const getReviews = (request, response) => {
  if (request.query.page_size != null && request.query.offset != null) {
    const page_size = parseInt(request.query.page_size);
    const offset = parseInt(request.query.offset);
    pool.query('SELECT * FROM reviews ORDER BY id DESC LIMIT $1 OFFSET $2', [page_size, offset], (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
  } else {
    pool.query('SELECT * FROM reviews ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
  }
};

const getEateryById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM eateries WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getReviewById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM reviews WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createEatery = (request, response) => {
  const { name, address, description } = request.body;

  pool.query(
    'INSERT INTO eateries (name, address, description) VALUES ($1, $2, $3) RETURNING *',
    [name, address, description],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Eatery added with ID: ${results.rows[0].id}`);
    }
  );
};

const createReview = (request, response) => {
  const { eatery_name, food_name, score, review_text, review_decription, image_data } = request.body;

  pool.query(
    'INSERT INTO reviews (eatery_name, food_name, score, review_text, review_decription, image_data) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    [eatery_name, food_name, score, review_text, review_decription, image_data],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Review added with ID: ${results.rows[0].id}`);
    }
  );
};

const updateEatery = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, address, description } = request.body;

  pool.query(
    'UPDATE eateries SET name = $1, address = $2, description = $3 WHERE id = $4',
    [name, address, description, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Eatery modified with ID: ${id}`);
    }
  );
};

const updateReview = (request, response) => {
  const id = parseInt(request.params.id);
  const { eatery_name, food_name, score, review_text, review_decription, image_data } = request.body;

  pool.query(
    'UPDATE reviews SET food_name = $1, score = $2, review_text = $3, review_decription = $4, image_data = $5 WHERE id = $6',
    [food_name, score, review_text, review_decription, image_data, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Review modified with ID: ${id}`);
    }
  );
};

const deleteEatery = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('DELETE FROM eateries WHERE id = $1;', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Eatery deleted with ID: ${id}`);
  });
};

const deleteReview = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('DELETE FROM reviews WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Review deleted with ID: ${id}`);
  });
};

//////////////////
const searchReviews = (request, response) => {
  const { query, sortBy = "time", sortOrder = "desc", location, page = 1, limit = 10 } = request.query;
  let values = [];
  let sql = `
    SELECT r.*, e.name AS eatery_name, e.address 
    FROM reviews r
    JOIN eateries e ON r.eatery_id = e.ID
    WHERE r.review_text ILIKE $1 OR r.food_name ILIKE $1
  `;

  values.push(`%${query}%`);

  // Filter by location (eatery name)
  if (location) {
    sql += ` AND e.name ILIKE $${values.length + 1}`;
    values.push(`%${location}%`);
  }

  // Sorting logic
  const order = sortOrder.toLowerCase() === "asc" ? "ASC" : "DESC";
  if (sortBy === "time") {
    sql += ` ORDER BY r.ID ${order}`;
  } else if (sortBy === "rank") {
    sql += ` ORDER BY r.score ${order}`;
  } else if (sortBy === "location") {
    sql += ` ORDER BY e.name ${order}`;
  }

  // Pagination (LIMIT & OFFSET)
  const offset = (page - 1) * limit;
  sql += ` LIMIT $${values.length + 1} OFFSET $${values.length + 2}`;
  values.push(limit, offset);

  pool.query(sql, values, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
//////////////

module.exports = {
  getEateries,
  getReviews,
  getEateryById,
  getReviewById,
  createEatery,
  createReview,
  updateEatery,
  updateReview,
  deleteEatery,
  deleteReview,
  searchReviews,
};
