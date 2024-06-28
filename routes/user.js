import express from 'express';
import { getAboutPage, getCementPage, getContactPage, getHomePage, getMIPage, getSteelPage, moreInfo, postContact,moreInfo1, moreInfo2, postCementI, getMarket } from '../controller/user.js';


const router = express.Router();

router.get('/',getHomePage);
router.get('/home',getHomePage);
router.get("/home/about", getAboutPage);
router.get("/home/contact", getContactPage);
router.get("/home/cement", getCementPage);
router.get("/home/steel", getSteelPage);
router.get("/home/inframart",getMarket);
router.get("/moreinfo", getMIPage);

router.post('/postContactPage',postContact);
router.post("/getMoreInfo",moreInfo);
router.post("/getMoreInfo1",moreInfo1);
router.post("/getMoreInfo2", moreInfo2);
router.post("/postCementInquiry",postCementI);


export default router;