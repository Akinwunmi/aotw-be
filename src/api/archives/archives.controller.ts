import { Request, RequestHandler, Response } from 'express';

import * as ArchiveService from './archives.service';

export const getArchives: RequestHandler = async (req: Request, res: Response) => {
  try {
    const archives = await ArchiveService.getArchives();

    res.status(200).json({
      archives
    });
  } catch (error) {
    console.error('[archives.controller][getArchives][Error]', typeof error === 'object' ? JSON.stringify(error) : error);
    res.status(500).json({
      message: 'An error occured when fetching archives.'
    });
  }
};

export const getArchiveById: RequestHandler = async (req: Request, res: Response) => {
  try {
    const archive = await ArchiveService.getArchiveById(Number(req.params.id));

    res.status(200).json({
      archive
    });
  } catch (error) {
    console.error('[archives.controller][getArchiveById][Error]', typeof error === 'object' ? JSON.stringify(error) : error);
    res.status(500).json({
      message: 'An error occured when fetching archive.'
    });
  }
};

export const createArchive: RequestHandler = async (req: Request, res: Response) => {
  try {
    const archive = await ArchiveService.createArchive(req.body);

    res.status(200).json({
      archive
    });
  } catch (error) {
    console.error('[archives.controller][createArchive][Error]', typeof error === 'object' ? JSON.stringify(error) : error);
    res.status(500).json({
      message: 'An error occured when creating a new archive.'
    });
  }
};

export const updateArchiveById: RequestHandler = async (req: Request, res: Response) => {
  try {
    const archive = await ArchiveService.updateArchiveById({ ...req.body, id: Number(req.params.id) });

    res.status(200).json({
      archive
    });
  } catch (error) {
    console.error('[archives.controller][updateArchiveById][Error]', typeof error === 'object' ? JSON.stringify(error) : error);
    res.status(500).json({
      message: 'An error occured when updating the archive.'
    });
  }
};

export const deleteArchiveById: RequestHandler = async (req: Request, res: Response) => {
  try {
    const result = await ArchiveService.deleteArchiveById(Number(req.params.id));

    res.status(200).json({
      result
    });
  } catch (error) {
    console.error('[archives.controller][deleteArchiveById][Error]', typeof error === 'object' ? JSON.stringify(error) : error);
    res.status(500).json({
      message: 'An error occured when deleting the archive.'
    });
  }
};
