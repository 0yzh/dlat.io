require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.set('port', process.env.PORT || 80);
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  console.log('get route hit');
  res.render('index');
});

app.post('/send', (req, res) => {
  console.log(req.body);

  // generate html email response
  const output = `<!DOCTYPE html><html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>Welcome to Squarespace | Squarespace</title> <meta name="viewport" content="width=device-width"> <style type="text/css"> #outlook a{padding: 0;}.ReadMsgBody{width: 100%;}.ExternalClass{width: 100%;}.ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div{line-height: 100%;}blockquote .original-only, .WordSection1 .original-only{display: none !important;}.appleLinkIgnore a{color: #222222; text-decoration: none;}.appleFooter a{color: #797979; text-decoration: none;}@media screen and (max-width: 630px){table[class="wrapper"]{width: 100% !important;}td[class="logo"]{text-align: left !important; padding: 0 !important;}td[class="logo"] img{margin: 0 auto !important; text-align: center !important; display: block !important;}.mobile-hide{display: none !important; overflow: hidden !important; float: left !important; font-size: 1px !important; line-height: 1px !important; max-width: 0 !important; opacity: 0 !important; color: #ffffff !important;}.responsive-table{width: 100% !important;}.text-padding-left{padding-left: 5% !important;}.text-padding-right, .mobile-text-padding-right{padding-right: 5% !important;;}.standard-line{padding: 10px 0 14px 0 !important; line-height: 24px !important;}.list{padding: 5px 22px 16px 0; line-height: 24px;}.mobile-no-padding{padding: 0 0 0 0 !important;}.header{height: 120px !important;}td[class="heading"]{padding: 35px 0 9px 0 !important; font-size: 36px !important; line-height: 48px !important; text-align: left !important;}.sub-heading{font-size: 21px !important; line-height: 24px !important; padding: 32px 0 16px 0 !important;}.sub-heading{font-size: 21px !important; line-height: 24px !important; padding: 32px 0 16px 0 !important;}.label{font-size: 12px !important; line-height: 12px !important; padding: 7px 0 5px 0 !important;}.body-text-small{color: #222222 !important;}.body-text{color: #222222 !important; text-align: left !important; font-size: 16px !important;}.footer-links{letter-spacing: 0 !important; font-weight: 600 !important; padding: 34px 55px 0 55px !important;}.footer-unsubscribe{font-size: 11px !important; padding-top: 7px !important; padding-bottom: 22px !important;}.footer img{padding: 5px 0 44px 0 !important;}td[class="mobile-wrapper"]{padding: 10px 5% 15px 5% !important;}table[class="mobile-button-container"]{margin: 0 auto !important; width: 100% !important;}.button a{font-size: 12px !important;}.black-button{border-top: 12px solid #3e3e3e !important; border-bottom: 12px solid #3e3e3e !important;}.button{width: 70% !important; padding: 5px 0 19px 0 !important; line-height: 24px !important; border: 0 !important; font-size: 12px !important; text-align: center !important; max-width: 400px !important; font-weight: 400 !important;}.large-padding-bottom{padding-bottom: 29px !important;}.header{height: 120px !important;}.full-width img{width: 100% !important; height: auto !important;}.image-heading{padding-left: 22px !important;}.two-column img{width: 100% !important; height: auto !important;}img.mobile-full-width{width: 100% !important; height: auto !important;}.list{padding: 5px 22px 16px 0 !important; line-height: 24px !important;}.mobile-show{display: table-cell !important; width: 100% !important; height: auto !important; line-height: 22px !important; max-height: 616px !important; max-width: 616px !important; opacity: 1 !important; overflow: visible;}.mobile-show img{display: block !important; width: 100% !important; height: auto !important; line-height: 22px !important; max-height: 616px !important; max-width: 616px !important; opacity: 1 !important; overflow: visible;}.left-column-text{padding: 22px 5% !important;}.right-column-text{padding: 22px 5% !important;}}table{border-collapse: collapse;}</style></head><body style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;height: 100% !important;margin: 0;padding: 0;width: 100% !important;"> <span class="hidden remove-from-plain-text" style="display: none;font-size: 1px;line-height: 1px;max-width: 0;max-height: 0;min-width: 0;min-height: 0;height: 0;width: 0;opacity: 0;overflow: hidden;color: #ffffff;"></span> <div style="display:none; white-space:nowrap; font:15px courier; line-height:0;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </div><table align="center" style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;border-collapse: collapse !important;min-width: 100%" cellpadding="0" cellspacing="0" width="100%"> <tbody><tr> <td class="mobile-hide" height="44" bgcolor="#EDEDED" colspan="3" style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"> </td></tr><tr> <td class="mobile-hide spacer" width="58" bgcolor="#EDEDED" style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;min-width: 10px;width: 1%;"></td><td style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"> <table border="0" cellpadding="0" cellspacing="0" width="100%" style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;border-collapse: collapse !important;"> <tbody><tr> <td height="80" align="center" class="mobile-no-padding header-wrapper" bgcolor="#EDEDED" style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"> <table border="0" cellpadding="0" cellspacing="0" width="616" class="wrapper" style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;border-collapse: collapse !important;"> <tbody><tr> <td colspan="2" width="616" bgcolor="#DADADA" class="empty-cell" height="5" style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;font-size: 5px;line-height: 5px;max-height: 5px;"> &nbsp; </td></tr><tr> <td height="80" bgcolor="#ffffff" class="logo" style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"> <table class="mobile-no-padding header" border="0" cellpadding="0" cellspacing="0" width="100%" style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;border-collapse: collapse !important;"><tbody><tr> <td class="mobile-no-padding text-padding-left" height="80" width="180" align="left" style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;padding-left: 58px;font-family: Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;"> <a href="#" target="_blank" style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;color: #010101; text-decoration: none;"> <span>⚡</span> <span style="font-weight: 700;color:#222222">MochiSoft</span> </a> </td><td class="mobile-hide mobile-no-padding text-padding-right" width="450" height="110" align="right" style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;padding-right: 58px;"> <table border="0" cellpadding="0" cellspacing="0" style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;border-collapse: collapse !important;"> <tbody><tr> <td align="right" class="category-wrapper" style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;padding-bottom: 2px;"> </td></tr></tbody></table> </td></tr></tbody></table> </td></tr></tbody></table> </td></tr></tbody></table><table border="0" cellpadding="0" cellspacing="0" width="100%" style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;border-collapse: collapse !important;"> <tbody><tr> <td bgcolor="#EDEDED" align="center" style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"> <table border="0" cellpadding="0" cellspacing="0" width="616" class="gmail-spacer responsive-table" style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;border-collapse: collapse !important;"> <tbody><tr> <td style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"> <table width="100%" border="0" cellspacing="0" cellpadding="0" style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;border-collapse: collapse !important;"><tbody><tr> <td bgcolor="#fff" class="text-padding-left text-padding-right large-padding-bottom" style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;padding-left: 58px;padding-bottom: 44px;padding-right: 58px;"> <table width="100%" border="0" cellspacing="0" cellpadding="0" style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;border-collapse: collapse !important;"> <tbody><tr> <td align="left" class="heading" style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;word-wrap: break-word;font-size: 37px;font-weight: 100;color: #222222;font-family: Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;padding: 15px 0 14px 0;text-align: left;letter-spacing: 0.02em;"> We've got you covered. </td></tr><tr> <td align="left" class="standard-line body-text" style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;padding: 6px 0 16px 0;line-height: 22px;font-weight: 400;font-family: Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 14px;letter-spacing: 0.02em;color: #666666;text-align: left;"> You're all set to receive updates from us! Our engineers our working hard to have the beta launch ready. You will receive a follow-up email with an invite&nbsp;key. <br/><br/>Thank you for your interest in Dlat! </td></tr><tr> <td align="left" class="standard-line body-text" style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;padding: 6px 0 16px 0;line-height: 22px;font-weight: 400;font-family: Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 14px;letter-spacing: 0.02em;color: #555555;text-align: left;"> <div class="label" style="font-size: 12px;font-weight: 600;color: #222222;letter-spacing: 1px;text-transform: uppercase;font-family: Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;"> Your sign up email address: </div><div class="body-text" style="font-weight: 400;font-family: Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 14px;letter-spacing: 0.02em;color: #666666;text-align: left;"> <span style="text-decoration: none;"><a href="#" style="text-decoration: none;cursor: text: pointer-events: none;">${req.body.email}</a></span> </div></td></tr></tbody></table> <table width="100%" border="0" cellspacing="0" cellpadding="0" style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;border-collapse: collapse !important;"> <tbody><tr> <td align="left" class="sub-heading" style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;font-size: 21px;font-weight: 200;color: #222222;font-family: Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;padding: 36px 0 18px 0;letter-spacing: 0.02em;line-height: 22px;"> Questions or comments? </td></tr><tr> <td align="left" class="standard-line body-text" style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;padding: 6px 0 16px 0;line-height: 22px;font-weight: 400;font-family: Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 14px;letter-spacing: 0.02em;color: #555555;text-align: left;"> We're here to help - our support team is available <a href="mailto:dlat.noreply@gmail.com" style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;color: #000000;">support@dlat.io</a>. </td></tr></tbody></table> </td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td><td width="58" class="mobile-hide spacer" bgcolor="#EDEDED" style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;min-width: 10px;width: 1%;"></td></tr><tr> <td class="footer" colspan="3" style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"> <table border="0" cellpadding="0" cellspacing="0" width="100%" style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;border-collapse: collapse !important;"> <tbody><tr> <td class="text-padding-left text-padding-right" height="115" align="center" bgcolor="#EDEDED" style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;padding-left: 58px;padding-right: 58px;"> <table border="0" cellpadding="0" cellspacing="0" class="wrapper" style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;border-collapse: collapse !important;"> <tbody> <tr> <td align="center" class="footer-unsubscribe" valign="middle" style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;color: #797979;padding: 6px 20px 10px;font-family: Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 12px;"> <span class="appleFooter"><br/>1 Mochi Parkway, Mountain View, CA 94043</span><br/><br/> <span class="unsub" style="font-size: 10px; line-height: 1.5; letter-spacing: 0.2px">Didn't intend to receive this email? We're sorry for the mix-up. Click <a href="#" style="color: #4285f4; text-decoration: none;">here</a> to unsubscribe at any&nbsp;anytime.</span> </td></tr><tr> <td class="footer-logo" align="center" valign="middle" style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;padding-bottom: 56px;"> </td></tr></tbody></table> </td></tr></tbody></table> </td></tr></tbody></table><script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script></body></html>`;

  // step 1
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  // step 2
  const mailOptions = {
    from: 'dlat.noreply@gmail.com',
    to: req.body.email,
    subject: 'Thanks for signing up!',
    text: 'You are all set to receive cool updates from us.',
    html: output
  };

  // step 3
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });

  setTimeout(() => {
    res.redirect('/');
  }, 3200);
});

app.listen(app.get('port'), function() {
  console.log(`Node app is running at localhost: ${app.get('port')}`);
});
