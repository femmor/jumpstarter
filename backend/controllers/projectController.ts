import { Request, Response } from 'express';

/**
 *
 * Get Projects
 *
 */
const getProjects = (req: Request, res: Response) => {
  res.status(200).json({
    message: `Get all projects`,
  });
};

/**
 *
 * Create Project
 *
 */
const createProject = (req: Request, res: Response) => {
  if (!req.body.title) {
    res.status(400);
    throw new Error('Title is required');
  }

  res.status(201).json({
    message: `Create project`,
  });
};

/**
 *
 * Get Project
 *
 */
const getProject = (req: Request, res: Response) => {
  res.status(200).json({
    message: `Get project ${req.params.id}`,
  });
};

/**
 *
 * Update Project
 *
 */
const updateProject = (req: Request, res: Response) => {
  res.status(200).json({
    message: `Update project ${req.params.id}`,
  });
};

/**
 *
 * Delete Project
 *
 */
const deleteProject = (req: Request, res: Response) => {
  res.status(200).json({
    message: `Delete project ${req.params.id}`,
  });
};

export { getProjects, createProject, getProject, updateProject, deleteProject };
