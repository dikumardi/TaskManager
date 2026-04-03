const taskModel = require("../models/task.model");

/**
@name createUserController
@description  📌 Create Task
@access public
**/
exports.createUserController = async (req, res) => {
  try {
    const { title } = req.body;
    const task = await taskModel.create({
      title,
    });

    res.status(201).json({ message: "Task Created Successfully", task });
  } catch (error) {
    console.error("Server Error");
  }
};

/**
@name getsUserController
@description  📌 Gets  Task
@access public
GET /tasks?status=completed
GET /tasks?priority=high
GET /tasks?search=study
GET /tasks?status=pending&priority=high&search=study
**/

exports.getsUserController = async (req, res) => {
  // Step 1: Get query params
  const { status, priority, search } = req.query;

  // Step 2: Create empty filter object
  let filter = {};

  // Step 3: Apply status filter
  // Example: /tasks?status=completed
  if (status) {
    filter.status = status;
  }

  // Step 4: Apply priority filter
  // Example: /tasks?priority=high
  if (priority) {
    filter.priority = priority;
  }

  // Step 5: Apply search (IMPORTANT)
  // Example: /tasks?search=study
  if (search) {
    filter.title = {
      $regex: search, // match text
      $options: "i", // case-insensitive
    };
  }

  // Step 6: Fetch filtered data
  const tasks = await taskModel.find(filter);

  // Step 7: Send response
  res.status(200).json({ message: "Fetched Tasks Successfully",tasks });
};
