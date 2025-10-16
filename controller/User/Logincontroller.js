const { Userlogin } = require("../../model/User/Login");
require("dotenv").config();
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const createConnection = require("../../config/MongoDbConfig");
const db = require("../../config/dbConfig");
const genretOTP = () => {
    return crypto.randomInt(100000, 999999);
}
const loginController = {
    loginUser: (req, res) => {
        const { email } = req.body;


        Userlogin.login(email, (err, result) => {
            if (err) {
                return res.status(500).send({ mmessage: err });
            }
            else {
                const otp = genretOTP()
                const sendMailFunction = async () => {
                    const transporter = nodemailer.createTransport({
                        service: "gmail",
                        auth: {
                            user: "ayushparmar1705@gmail.com",
                            pass: process.env.GMAIL_PASSWORD,
                        }
                    })
                    const mailOption = {
                        from: "ayushparmar1705@gmail.com",
                        to: email,
                        subject: `OTP for urbanhome`,
                        text: `Your OTP ${otp}. don't share the OTP to anyone`
                    }
                    await transporter.sendMail(mailOption)

                }
                sendMailFunction()
                createConnection.otpVerification.insert(otp, email)
                return res.status(200).send({ code: 200, message: "otp send in your mail" })
            }
        })
    },
    verifyOTP: async (req, res) => {
        const otpdata = req.body;
        const sql = "SELECT * FROM users WHERE email = ?"
        db.query(sql, [otpdata.email], async (err, result) => {
            if (err) {
                return res.status(500).send({ message: err })
            }
            else {
                const verificationResult = await createConnection.otpVerification.verification(otpdata.email, otpdata.otp, result.role)


                if (verificationResult === null) {
                    return res.status(500).send({ message: "Invalid otp" })
                }
                else {

                    return res.status(200).send({ code: 200, message: "Otp verify succesfully", role: result[0].role })
                }
            }
        })


    }
}
module.exports = { loginController }