import nodemailer from 'nodemailer';
import { accInfo, bangurInfo, birlaInfo, hathiInfo, jklInfo, jksInfo, kamalInfo, opcInfo, ppcInfo, pscInfo, sagarInfo, srpcInfo } from '../models/user.js';
import dotenv from 'dotenv';
dotenv.config();

export const getHomePage = (req,res) => {
  res.render('home.pug');
}
export const getAboutPage = (req, res) => {
  res.render("about.pug");
};
export const getCementPage = (req, res) => {
  res.render("cement.pug");
};
export const getSteelPage = (req, res) => {
  res.render("steel.pug");
};
export const getContactPage = (req, res) => {
  res.render("contact.pug");
};
export const getMIPage = (req, res) => {
  res.render("moreInfo.pug");
};
export const getMarket = (req,res) => {
  res.render("inframart.pug");
}


export const postContact = (req,res) => { 
    const {name,email,subject,message,phone} = req.body;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "medwelljunction@gmail.com",
        pass: "bknuioewvrkobjls",
      },
    });
    transporter
      .sendMail({
        from: "medwelljunction@gmail.com",
        to: "jainamkp12@gmail.com",
        subject: `${subject}`,
        text: `Inquiry from ${name} , email : ${email}, phone: ${phone}, message : ${message}`,
      })
      .then(res.status(200));
    res.redirect('/home/contact');
};

export const postCementI = (req,res) =>{
  const { name, email, subject, message, phone, company } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "medwelljunction@gmail.com",
      pass: "bknuioewvrkobjls",
    },
  });
  transporter
    .sendMail({
      from: "medwelljunction@gmail.com",
      to: "info@infraindiamart.com",
      subject: `${subject}`,
      text: `Inquiry from ${name} , email : ${email}, phone: ${phone}, company: ${company}, \nmessage : ${message}`,
    })
    .then(res.status(200));
  res.redirect("/home/cement");
}


export const moreInfo = async(req,res) =>{
  const query = req.body.name;
  console.log(query);
  if (query=='opc') {
    var data =
      "A form of hydraulic binding material known as ordinary Portland cement (OPC) is made by mixing Portland cement clinker, composite materials, and gypsum in exact amounts. OPC 53  Grade cement is required to conform to BIS specification IS:12269-1987 with a designed strength for 28 days being a minimum of 53 MPa or 530 kg/sqcm. This kind of cement is commonly used and recognized for its exceptional binding qualities, which give structural elements strength. OPC is used for stabilization purposes and works best with sandy soils. It is also used as a concrete binder and for different building substances It is widely used in common construction scenarios, such as those involving buildings, bridges, pavements, and places with regular soil conditions, where specialized features are optional.When it comes to building construction, cement is essential. According to research, a major contributing element in the collapse of many structures has been cement of incorrect quality. India has sadly seen a number of instances as a result of poor cement quality.As a result, in order to produce cement, the government has mandated that producers follow ISI requirements. ";
    let search_result = await opcInfo.find({name:query})
    console.log(search_result);
    res.render("moreInfo.pug", {
      tag: "/ Cement / OPC",
      company: "",
      topic: "OPC 43/OPC 53",
      code: "Ordinary Portland Cement  - OPC",
      standard: "IS:12269-1987",
      data: data,
      productsList: search_result,
    });
  }
  if (query == "srpc") {
    var data =
      "SRPC is a type of Portland cement in which Tricalcium Aluminate (C3A) amount is less than 5% and the amount of C3A and calcium aluminoferrite (C4AF) together is less than 25%. This mixture gives sulphateresistant cement a remarkable ability to withstand sulphate-related difficulties when used in concrete constructions. This composition also promotes the production of calcium light.  Sulphate Resisting Portland Cement (SRPC) is specifically designed for construction projects in environments where there is a risk of sulfate attack. Use it where there the concrete structure faces the risk of being damaged by high amount of sulphates found in its immediate environment. Sulphate-resisting cement has many benefits, such as increased workability, reduced corrosion of reinforced steel, increased resistance to chloride ions, and greater structural robustness. These advantages have led to their broad application in a variety of building projects, including chemical sump pumps, sea walls, cooling towers, effluent treatment plants, and foundations . Overall, SRPC offers significant advantages in protecting concrete structures from sulfate attack, ensuring their durability and longevity in challenging environments. Its proven performance, enhanced durability, and versatility make it a valuable choice for construction projects where sulfate resistance is critical";
    let search_result = await srpcInfo.find({ name: query });
    console.log(search_result);
    res.render("moreInfo.pug", {
      company: "",
      tag: "/ Cement / SRPC",
      topic: "SRPC / SRC",
      code: "Sulphate Resisting Portland Cement - SRPC",
      standard: "IS 12330: 1988",
      data: data,
      productsList: search_result,
    });
  }
  if (query == "ppc") {
    var data =
      "Portland Pozzolana Cement (PPC) is a blended cement that contains gypsum, pozzolana particles, and Portland clinker in specific proportions. The pozzolanic material reacts with calcium hydroxide to create cementitious compounds, which makes concrete denser and more impermeable. Fly ash, a byproduct of thermal power plants, is combined with Portland cement clinker to create Portland Pozzolana cement. Fly ash and other pozzolanos are essentially siliceous minerals that, although not having cementitious qualities, will react with calcium hydroxide at room temperature to form compounds that, when finely split and wet, have properties similar to those of cement. Portland Pozzolana cement works well in harsh environmental circumstances and can be used for a variety of construction applications. It is used in large-scale concrete projects including dams, retaining walls, and sewage pipes, as well as in maritime construction and water-retaining structures. . PPC is suitable for a variety of construction purposes, including homes, buildings, roads, bridges, dams, and more. Portland Pozzolana Cement (PPC) is widely used in construction due to its advantageous properties and versatility ";
    let search_result = await ppcInfo.find({ name: query });
    console.log(search_result);
    res.render("moreInfo.pug", {
      company: "",
      tag: "/ Cement / PPC",
      topic: "PPC",
      code: "Portland Pozzolana Cement- PPC ",
      standard: "IS 1489 (Part-1):2015",
      data: data,
      productsList: search_result,
    });
  }
  if (query == "psc") {
    var data =
      "Granulated blast furnace slag (GBFS) and Ordinary Portland Cement (OPC) clinker are combined to create Portland Slag Cement (PSC), a type of blended cement. PSC is made from finely powdered slag, a by-product of the iron and steel industries, combined with gypsum and OPC clinker. Portland slag cement should contain a minimum of 25% and a maximum of 65% slag. Portland Slag Cement is a multipurpose, eco-friendly cement that has various benefits, including better workability, less heat of hydration, durability, and affordability. In the construction business, it is quite important, especially for projects that require long-term durability and sustainability.  psc-hathi.webpPortland slag cement is widely used in industrial projects, naval construction, and the building of concrete flyovers and roadways. It is especially beneficial for large-scale building projects like dam developments.  Overall, slag cement offers a combination of durability, sustainability, cost-effectiveness, and workability, making it a preferred choice for modern construction projects. ";
    let search_result = await pscInfo.find({ name: query });
    console.log(search_result);
    res.render("moreInfo.pug", {
      company: "",
      tag: "/ Cement / PSC",
      topic: "PSC / Slage",
      code: "Portland Slag Cement - PSC",
      standard: "IS 455: 2015",
      data: data,
      productsList: search_result,
    });
  }
}


export const moreInfo1 = async(req,res) =>{
  const query = req.body.name;
  console.log(query);
  if (query=='acc') {
    var data =
      "ACC Limited is one of India's leading manufacturers of cement and ready-mix concrete. Established in 1936, ACC has a rich legacy of providing high-quality construction materials. The company offers a diverse range of cement products tailored to meet various construction needs, including Ordinary Portland Cement (OPC), Portland Pozzolana Cement (PPC), and Ready Mixed Concrete (RMC). ACC cement is renowned for its strength, durability, and consistency, making it a preferred choice for both residential and commercial projects across India. Their product range includes ACC Gold, ACC F2R, ACC Suraksha, ACC Supercrete, and ACC Concrete+. Each variant is designed to cater to specific construction requirements, ensuring optimal performance and longevity. With a commitment to innovation and sustainability, ACC continues to set benchmarks in the Indian cement industry, empowering builders and engineers to construct structures of enduring quality.  ";
    let search_result = await accInfo.find({name:query})
    console.log(search_result);
    res.render("moreInfo.pug", {
      company: "INFRA INDIA MART",
      tag: "/ Cement / ACC",
      topic: "INFRA INDIA MART associate with ACC LIMITED",
      data: data,
      productsList: search_result,
    });
  }
  if (query == "jkl") {
    var data =
      "JK Lakshmi Cement Limited is a prominent player in the Indian cement industry, known for its commitment to quality and innovation. Established in 1982, the company offers a diverse range of high-quality cement products catering to various construction needs. Their product range includes Ordinary Portland Cement (OPC), Portland Pozzolana Cement (PPC), and specialized variants like JK Lakshmi Pro+ Cement and JK Lakshmi Power Mix, designed for specific construction requirements. JK Lakshmi Cement operates modern cement manufacturing plants strategically located across India to ensure efficient distribution and timely delivery to customers. The company has production facilities in key locations such as Sirohi in Rajasthan, Durg in Chhattisgarh, and Kalol in Gujarat. These state-of-the-art plants are equipped with advanced technology and adhere to stringent quality control measures to deliver superior cement products consistently. The production capacity of JK Lakshmi Cement's manufacturing plants is substantial, contributing significantly to the company's market presence and growth. With an aggregate production capacity exceeding 13 million tonnes per annum (MTPA), JK Lakshmi Cement has a strong manufacturing base to meet the growing demand for cement in India's rapidly expanding construction sector. ";
    let search_result = await jklInfo.find({ name: query });
    console.log(search_result);
    res.render("moreInfo.pug", {
      company: "INFRA INDIA MART",
      tag: "/ Cement / JK Lakshmi Cement",
      topic: "INFRA INDIA MART associate with JK Lakshmi Cement",
      data: data,
      productsList: search_result,
    });
  }
  if (query == "hathi") {
    var data =
      "Saurashtra Cement Limited (SCL) is a notable player in the Indian cement industry, renowned for its commitment to quality and innovation. Established in 1956, SCL has built a strong reputation for delivering high-quality cement products to meet various construction requirements. The company's manufacturing plant is strategically located in Ranavav, Gujarat, equipped with advanced technology and efficient production processes. Saurashtra Cement Limited has a substantial production capacity, capable of manufacturing over 3.5 million tonnes of cement annually. This production capacity positions SCL as a significant contributor to India's cement industry, supporting infrastructure development and construction projects nationwide. The company's product portfolio includes Ordinary Portland Cement (OPC) and Portland Pozzolana Cement (PPC), known for their superior quality, strength, and durability. Saurashtra Cement Limited is committed to sustainability and environmental responsibility, ensuring its operations adhere to stringent safety and environmental standards. Through continuous innovation and customer-centric approach, SCL remains dedicated to providing reliable and high-performance cement solutions, contributing to the growth and progress of the construction sector in India.  ";
    let search_result = await hathiInfo.find({ name: query });
    console.log(search_result);
    res.render("moreInfo.pug", {
      company: "INFRA INDIA MART",
      tag: "/ Cement / Hathi Cement",
      topic: "INFRA INDIA MART associate with Hathi Cement",
      data: data,
      productsList: search_result,
    });
  }
  if (query == "sagar") {
    var data =
      "Sagar Cement Limited, established in 1985, is a leading cement manufacturer in India, recognized for its dedication to quality and innovation. The company operates a state-of-the-art integrated cement plant situated in Nalgonda District, Telangana. This modern facility is equipped with advanced technology and efficient production processes, ensuring consistent quality and high performance in its cement products. Sagar Cement Limited has a significant production capacity, enabling it to manufacture a substantial volume of cement to meet the demands of the market. The company's product portfolio includes a range of cement types, such as Ordinary Portland Cement (OPC) and Portland Pozzolana Cement (PPC), catering to various construction requirements. Through adherence to strict quality standards and continuous improvement initiatives, Sagar Cement Limited has established itself as a trusted name in the industry. Its commitment to sustainability is reflected in its environmentally conscious manufacturing practices. Sagar Cement Limited's strategic location and robust production capabilities position it as a key contributor to India's infrastructure development. With a focus on customer satisfaction and a vision for growth, the company continues to strengthen its presence in the cement market, driving progress and innovation in the sector. ";
    let search_result = await sagarInfo.find({ name: query });
    console.log(search_result);
    res.render("moreInfo.pug", {
      company: "INFRA INDIA MART",
      tag: "/ Cement / Sagar Cement",
      topic: "INFRA INDIA MART associate with Sagar Cement",
      data: data,
      productsList: search_result,
    });
  }
}


export const moreInfo2 = async (req, res) => {
  const query = req.body.name;
  if (query == "shree") {
    var data ="Shree Cement Limited, a leading player in the Indian cement industry, boasts a diverse product range tailored to meet various construction needs. Established in 1979, the company has emerged as a pioneer in sustainable cement manufacturing, focusing on quality, innovation, and environmental stewardship. Shree Cement's product portfolio includes Ordinary Portland Cement (OPC), Portland Pozzolana Cement (PPC), and specialized variants such as Shree Jung Rodhak Cement, designed for enhanced durability in adverse conditions, and Shree Ultra Cement, renowned for its high strength and performance. With a strong manufacturing footprint, Shree Cement operates multiple state-of-the-art production facilities strategically located across India. The company's manufacturing plants are situated in key regions including Rajasthan, Uttarakhand, Bihar, Haryana, Chhattisgarh, and Uttar Pradesh. These modern plants are equipped with advanced technology and adhere to stringent quality control standards, ensuring the consistent production of premium-quality cement. Shree Cement's production capacity is among the highest in the industry, with an aggregate capacity exceeding 50 million tonnes per annum (MTPA). ";
    let search_result = await bangurInfo.find({ name: "bangur" });
    console.log(search_result);
    res.render("moreInfo.pug", {
      company: "INFRA INDIA MART",
      tag: "/ Cement / Shree cement ltd",
      topic: "INFRA INDIA MART associate with Shree Cement Limited",
      data: data,
      productsList: search_result,
    });
  }
  if (query == "kamal") {
    var data =
      "Shree Digvijay Cement Co. Ltd is a respected name in the Indian cement industry, renowned for its commitment to quality and excellence. Established in 1949, the company has a rich legacy of serving the construction sector with high-quality cement products. Shree Digvijay Cement offers a diverse range of cement products tailored to meet various construction needs, including Ordinary Portland Cement (OPC) and Portland Pozzolana Cement (PPC). These products are known for their superior quality, strength, and durability, making them suitable for a wide range of construction applications. The company operates a modern cement manufacturing plant located in Sikka, Gujarat, equipped with advanced technology and efficient production processes. With a robust production capacity, Shree Digvijay Cement has the capability to produce over 1.3 million tonnes of cement per annum. This production capacity enables the company to meet the growing demand for cement in the region and beyond, contributing to infrastructure development and construction projects across India.";
    let search_result = await kamalInfo.find({ name: query });
    console.log(search_result);
    res.render("moreInfo.pug", {
      company: "INFRA INDIA MART",
      tag: "/ Cement / Kamal cement",
      topic: "INFRA INDIA MART associate with Kamal Cement",
      data: data,
      productsList: search_result,
    });
  }
  if (query == "birla") {
    var data =
      "Birla Corporation Limited (BCL), a flagship company of the M P Birla Group, is a prominent player in the Indian cement industry with a rich legacy dating back to 1919. Over the years, BCL has established itself as a leading manufacturer of cement and building materials, renowned for its commitment to quality and innovation. The company offers a comprehensive product range including Ordinary Portland Cement (OPC), Portland Pozzolana Cement (PPC), and specialty variants tailored to meet specific construction requirements. Birla Corporation Limited operates modern cement manufacturing plants strategically located across India, including facilities in Satna, Durgapur, Chanderia, and Raebareli. These state-of-the-art plants are equipped with advanced technology and efficient production processes, enabling the company to maintain a substantial production capacity. With an aggregate production capacity exceeding 15.5 million tonnes per annum (MTPA), Birla Corporation Limited plays a significant role in meeting the growing demand for cement in India's booming construction sector. Committed to sustainability and environmental stewardship, the company continuously invests in eco-friendly initiatives and adheres to stringent quality control measures in its operations. Through its unwavering focus on excellence, Birla Corporation Limited remains a trusted partner for builders, contractors, and engineers nationwide, driving growth and progress in India's infrastructure development landscape. ";
    let search_result = await birlaInfo.find({ name: query });
    console.log(search_result);
    res.render("moreInfo.pug", {
      company: "INFRA INDIA MART",
      tag: "/ Cement / MP Birla group",
      topic: "INFRA INDIA MART associate with MP BIRLA GROUP",
      data: data,
      productsList: search_result,
    });
  }
  if (query == "jks") {
    var data =
      "JK Super Cement, a flagship brand of JK Cement Ltd, is a leading player in India's cement industry, known for its superior quality and performance. With a legacy dating back to 1975, JK Super Cement has established itself as a trusted choice for construction projects across the country. The brand offers a diverse range of cement products including Ordinary Portland Cement (OPC), Portland Pozzolana Cement (PPC), and specialized variants engineered for specific construction needs. JK Super Cement is manufactured at state-of-theart production plants strategically located in Rajasthan, Madhya Pradesh, Karnataka, and Haryana. These plants are equipped with advanced technology and have a combined production capacity exceeding 15 million tonnes per annum. With a strong focus on quality assurance and innovation, JK Super Cement consistently delivers high-quality products that meet stringent industry standards, making it a preferred choice for builders, engineers, and contractors nationwide. The brand's commitment to sustainability and environmental stewardship is reflected in its efficient manufacturing processes and responsible business practices. Through continuous investment in technology and infrastructure, JK Super Cement aims to further strengthen its position as a market leader and contribute to the growth and development of India's infrastructure sector. ";
    let search_result = await jksInfo.find({ name: query });
    console.log(search_result);
    res.render("moreInfo.pug", {
      company: "INFRA INDIA MART",
      tag: "/ Cement / JK super cement",
      topic: "INFRA INDIA MART associate with JK Super Cement",
      data: data,
      productsList: search_result,
    });
  }
  if (query == "bangur") {
    var data =
      "Shree Cement Limited, a leading player in the Indian cement industry, boasts a diverse product range tailored to meet various construction needs. Established in 1979, the company has emerged as a pioneer in sustainable cement manufacturing, focusing on quality, innovation, and environmental stewardship. Shree Cement's product portfolio includes Ordinary Portland Cement (OPC), Portland Pozzolana Cement (PPC), and specialized variants such as Shree Jung Rodhak Cement, designed for enhanced durability in adverse conditions, and Shree Ultra Cement, renowned for its high strength and performance. With a strong manufacturing footprint, Shree Cement operates multiple state-of-the-art production facilities strategically located across India. The company's manufacturing plants are situated in key regions including Rajasthan, Uttarakhand, Bihar, Haryana, Chhattisgarh, and Uttar Pradesh. These modern plants are equipped with advanced technology and adhere to stringent quality control standards, ensuring the consistent production of premium-quality cement. Shree Cement's production capacity is among the highest in the industry, with an aggregate capacity exceeding 50 million tonnes per annum (MTPA). ";
    let search_result = await bangurInfo.find({ name: query });
    console.log(search_result);
    res.render("moreInfo.pug", {
      company: "INFRA INDIA MART",
      tag: "/ Cement / Bangur cement",
      topic: "INFRA INDIA MART associate with Bangur Cement",
      data: data,
      productsList: search_result,
    });
  }
};