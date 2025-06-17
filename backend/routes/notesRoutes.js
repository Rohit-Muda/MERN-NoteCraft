import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteById,
  updateNote,
} from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;

//BEFORE CONTROLLERS AND ROUTES--------
// router.get('/',
//     (req,res)=>{
//         res.status(200).send("you have 10 notes",)
//     }
// )
// router.post('/',
//     (req,res)=>{
//         res.status(201).json({message:"post created successfully"})
//     }
// )
// router.put('/:id',
//     (req,res)=>{
//         res.status(200).json({message:"post updated successfully"})
//     }
// )
// router.delete('/:id',
//     (req,res)=>{
//         res.status(200).json({message:"post deleted successfully"})
//     }
// )