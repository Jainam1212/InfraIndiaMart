import mongoose from "mongoose";

const opcs = new mongoose.Schema({
    name:String,
    company:String,
    image:String,
});
const srpcs = new mongoose.Schema({
    name:String,
    company:String,
    image:String,
});
const ppcs = new mongoose.Schema({
    name:String,
    company:String,
    image:String,
});
const pscs = new mongoose.Schema({
    name:String,
    company:String,
    image:String,
});
const accC = new mongoose.Schema({
  name: String,
  product: String,
  image: String,
});
const jklC = new mongoose.Schema({
  name: String,
  product: String,
  image: String,
});
const hathiC = new mongoose.Schema({
  name: String,
  product: String,
  image: String,
});
const sagarC = new mongoose.Schema({
  name: String,
  product: String,
  image: String,
});
const kamalC = new mongoose.Schema({
  name: String,
  product: String,
  image: String,
});
const birlaC = new mongoose.Schema({
  name: String,
  product: String,
  image: String,
});
const jksC = new mongoose.Schema({
  name: String,
  product: String,
  image: String,
});
const bangurC = new mongoose.Schema({
  name: String,
  product: String,
  image: String,
});

const userSchema = new mongoose.Schema({
  username: String,
  useremail: String,
  userphone: String,
  usersubject: String,
  usersubject: String,
});

export const opcInfo = mongoose.model('opc',opcs);
export const srpcInfo = mongoose.model("srpc", srpcs);
export const ppcInfo = mongoose.model("ppc", ppcs);
export const pscInfo = mongoose.model("psc", pscs);
export const accInfo = mongoose.model("acc", accC);
export const jklInfo = mongoose.model("jkl", jklC);
export const hathiInfo = mongoose.model("hathi", hathiC);
export const sagarInfo = mongoose.model("sagar", sagarC);
export const kamalInfo = mongoose.model("kamal", kamalC);
export const birlaInfo = mongoose.model("birla", birlaC);
export const jksInfo = mongoose.model("jks", jksC);
export const bangurInfo = mongoose.model("bangur", bangurC);
export const userInfo = mongoose.model("users", userSchema);