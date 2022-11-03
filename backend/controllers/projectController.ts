import { Request, Response } from 'express';
import asyncHandler = require('express-async-handler');
import mongoose from 'mongoose';
import ProjectModel from '../models/projectModel';

/**
 *
 * Get Projects
 *
 */
const getProjects = asyncHandler(async (req: Request, res: Response) => {
  const projects = await ProjectModel.find();

  res.status(200).json(projects);
});

/**
 *
 * Create Project
 *
 */
const createProject = asyncHandler(async (req: Request, res: Response) => {
  if (!req.body.title) {
    res.status(400);
    throw new Error('Title is required');
  }

  const project = await ProjectModel.create(req.body);

  if (!project) {
    res.status(400);
    throw new Error('Project could not be created');
  }

  res.status(201).json(project);
});

/**
 *
 * Get Project
 *
 */
const getProject = asyncHandler(async (req: Request, res: Response) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400);
    throw new Error(`${req.params.id} is not a valid project id}`);
  }
  const project = await ProjectModel.findById(req.params.id);

  if (!project) {
    res.status(404);
    throw new Error('Project not found');
  }

  res.status(200).json(project);
});

/**
 *
 * Update Project
 *
 */
const updateProject = asyncHandler(async (req: Request, res: Response) => {
  if (!req.body.title) {
    res.status(400);
    throw new Error('Title is required');
  }

  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400);
    throw new Error(`${req.params.id} is not a valid project id}`);
  }

  const project = await ProjectModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  if (!project) {
    res.status(404);
    throw new Error('Project not found');
  }

  res.status(200).json(project);
});

/**
 *
 * Delete Project
 *
 */
const deleteProject = asyncHandler(async (req: Request, res: Response) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400);
    throw new Error(`${req.params.id} is not a valid project id}`);
  }
  const project = await ProjectModel.findByIdAndDelete(req.params.id);

  if (!project) {
    res.status(404);
    throw new Error('Project not found');
  }

  res.status(200).json({
    message: 'Project deleted successfully',
  });
});

export { getProjects, createProject, getProject, updateProject, deleteProject };
