import { Request, Response } from 'express';

/**
 *
 * Get Projects
 *
 */
const getProjects = (req: Request, res: Response) => {
  res.json({
    message: `Get all projects`,
  });
};

/**
 *
 * Create Project
 *
 */
const createProject = (req: Request, res: Response) => {
  res.json({
    message: `Create project`,
  });
};

/**
 *
 * Get Project
 *
 */
const getProject = (req: Request, res: Response) => {
  res.json({
    message: `Get project ${req.params.id}`,
  });
};

/**
 *
 * Update Project
 *
 */
const updateProject = (req: Request, res: Response) => {
  res.json({
    message: `Update project ${req.params.id}`,
  });
};

/**
 *
 * Delete Project
 *
 */
const deleteProject = (req: Request, res: Response) => {
  res.json({
    message: `Delete project ${req.params.id}`,
  });
};

export { getProjects, createProject, getProject, updateProject, deleteProject };
