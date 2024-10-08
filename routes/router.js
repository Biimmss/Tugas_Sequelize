import express from "express";
import { createCustomer, deleteCustomer, getAllCustomer, getCustomerById, updateCustomer } from "../controllers/CustomerController.js";
import { createSales, deleteSales, getAllSales, getAllSalesById, updateSales } from "../controllers/SalesController.js";
import { createStock, deleteStock, getAllStock, getAllStockById, updateStock} from "../controllers/StockController.js";
import { createPembayaran, deletePembayaran, getAllPembayaran, getPembayaranById } from "../controllers/PembayaranController.js";
import { createPegawai, deletePegawai, getAllPegawai, getPegawaiById, updatePegawai } from "../controllers/PegawaiController.js";
const router = express.Router();

// Customer udah bener
router.get("/Customer", getAllCustomer);
router.get("/Customer/:id", getCustomerById);
router.post("/CreateCustomer", createCustomer)
router.put("/UpdateCustomer/:id", updateCustomer)
router.delete("/DeleteCustomer/:id", deleteCustomer)

// Sales udah bener
router.get("/Sales", getAllSales);
router.get("/Sales/:id", getAllSalesById);
router.post("/CreateSales", createSales)
router.put("/SalesUpdate/:id", updateSales)
router.delete("/DeleteSales/:id", deleteSales)

// Stock udah bener
router.get("/Stock", getAllStock);
router.get("/Stock/:id", getAllStockById);   
router.post("/Stock", createStock);
router.put("/StockUpdate/:id", updateStock);
router.delete("/StockDelete/:id", deleteStock )

// Pembayaran udah bener
router.get("/Pembayaran", getAllPembayaran)
router.get("/Pembayaran/:id", getPembayaranById)
router.post("/CreatePembayaran", createPembayaran)
router.put("/UpdatePembayaran/:id", createPembayaran)
router.delete("/DeletePembayaran/:id", deletePembayaran)

// Pegawai
router.get("/Pegawai", getAllPegawai)
router.get("/Pegawai/:id", getPegawaiById)
router.post("/CreatePegawai", createPegawai)
router.put("/Pegawai/:id", updatePegawai)
router.delete("/DeletePegawai/:id", deletePegawai)


export default router;