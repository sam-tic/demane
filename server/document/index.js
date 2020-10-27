module.exports = ({ name_a, name_e, date_b, id, address, nationality, bp, phone, other_phone, salair, work_s, salair_year, post, bank, other_salair, signature }) => {
    const today = new Date()
    return `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        body {}
        
        .form {
            max-width: 1000px;
            padding: 60px;
            margin: auto;
            position: relative;
            height: 1100px;
        }
        
        h5 {
            color: brown;
            text-align: center;
            margin-top: 100px;
            font-size: 20px;
        }
        
        .id {
            color: #000;
        }
        
        .inputs {
            box-sizing: border-box;
            margin: 50px auto;
            overflow: hidden;
            padding: 1px;
        }
        
        .inputs .group {
            position: relative;
            height: 40px;
            border: 1px solid #c48a51;
            margin-top: -1px;
            float: right;
        }
        
        .inputs .group label:nth-child(1) {
            background: #f7cda3;
            height: 38px;
            position: absolute;
            right: 0;
            z-index: 100;
            line-height: 40px;
            padding: 0 5px;
            color: #9c642c;
            border-left: 1px solid #c48a51;
            margin: 0 !important;
            font-size:11px;
        }
        
        .inputs label:nth-child(2) {
            background: #f7cda3;
            height: 38px;
            position: absolute;
            left: 0;
            z-index: 100;
            line-height: 40px;
            padding: 0 5px;
            color: #9c642c;
            border-right: 1px solid #c48a51;
            margin: 0 !important;
            font-size:11px;
        }
        
        
        .inputs p {
            line-height: 40px;
            border: none;
            width: 100%;
            text-align: center;
            height: 38px;
        }
        
        .gr3 {
            width: 37.5%;
        }
        
        .gr4 {
            width: 50%;
        }
        
        .gr5 {
            width: 62.5%;
        }
        
        .gr8 {
            width: 100%;
        }
        
        .cadre {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
        }
        
        .sign {
            clear: both;
            margin: 50px 20px;
            overflow: hidden;
        }
        
        .sign div {
            float: left;
            padding: 10px;
            color: #933b53
        }
        
        .sign div:nth-child(3) {
            direction: rtl;
        }
        
        .sign div:nth-child(1) {
            direction: ltr;
        }
        
        .sign div p {
            text-align: justify;
            padding: 20px 0 0 0px;
            font-size: 16px;
        }
        
        .sign div h6 {
            font-size: 18px;
        }
        
        .sign div:not(:nth-child(2)) {
            width: 30%;
            padding: 10px 15px;
        }
        
        .signature {
            width: 40%;
            height: 200px;
            
        }
        
        .signature-img {
            border: 1px solid;
            max-width: 100%;
            max-height: 100%;
            border-radius: 10px;
            overflow: hidden;
            padding: 50px;
            clear:both;
        }
    </style>
</head>

<body>
    <div class="form">
        <!-- file:///c:/xampp/htdocs/form/server/document/514-5149526_gold-ornamental-square-frame-clipart.png -->
        <img class="cadre" src="file:///c:/xampp/htdocs/form/server/document/514-5149526_gold-ornamental-square-frame-clipart.png" alt="">
        <h5><span>Client's Informations Number : </span><span class="id">5565254231</span><span> :  بيانات العميل رقم</span></h5>
        <div class="inputs">

            <div class="group gr4">
                <label class="" for="">الإسم</label>
                <label class="" for=""></label>
                <p>${name_a}</p>
            </div>

            <!---->

            <div class="group gr4">
                <label class="" for=""></label>
                <label class="" for="">Name</label>
                <p>${name_e}</p>
            </div>
            <!---->

            <div class="group gr4">
                <label class="" for="">رقم البطاقة الشخصية</label>
                <label class="" for="">Personal ID</label>
                <p>${id}</p>
            </div>
            <!---->

            <div class="group gr4">
                <label class="" for=""> تاريخ الميلاد </label>
                <label class="" for="">Birth Date</label>
                <p>${date_b}</p>
            </div>
            <!---->

            <div class="group gr3">
                <label class="" for="">الجنسية</label>
                <label class="" for="">Nationality</label>
                <p>${nationality}</p>
            </div>
            <!---->

            <div class="group gr5">
                <label class="" for="">عنوان المنزل</label>
                <label class="" for="">Home Address</label>
                <p>${address}</p>
            </div>
            <!---->

            <div class="group gr5">
                <label class="" for="">الجوال المعتمد للإخطار</label>
                <label class="" for="">َApproved Mobile</label>
                <p>${phone}</p>
            </div>
            <!---->

            <div class="group gr3">
                <label class="" for="">صندوق البريد</label>
                <label class="" for="">P.O BOX</label>
                <p>${bp}</p>
            </div>
            <!---->

            <div class="group gr8">
                <label class="" for="">أرقام معتمدة أخرى</label>
                <label class="" for="">Other Approved Numbers</label>
                <p>${other_phone}</p>
            </div>
            <!---->

            <div class="group gr5">
                <label class="" for=""> جهة العمل </label>
                <label class="" for="">Place of work</label>
                <p>${work_s}</p>
            </div>
            <!---->

            <div class="group gr3">
                <label class="" for="">الدخل الشهري</label>
                <label class="" for="">Monthly Income</label>
                <p>${salair}</p>
            </div>

            <!---->

            <div class="group gr5">
                <label class="" for="">الوظيفة/المنصب</label>
                <label class="" for="">Job/Position</label>
                <p>${post}</p>
            </div>
            <!---->

            <div class="group gr3">
                <label class="" for="">الإيراد السنوي</label>
                <label class="" for="">َAnnual Income</label>
                <p>${salair_year}</p>
            </div>

            <!---->

            <div class="group gr8">
                <label class="" for="">إسم البنك/فرع البنك/رقم الحساب</label>
                <label class="" for="">Bank Name/Branch/Acc No.</label>
                <p>${bank}</p>
            </div>
            <!---->

            <div class="group gr8">
                <label class="" for="">مصادر دخل أخرى</label>
                <label class="" for="">Other Income Resources</label>
                <p>${other_salair}</p>
            </div>



        </div>
        <div class="sign">
            <div>
                <h6>Client's Signature :</h6>
                <p>By signing on this document, I hereby acknowledge that all my data is correct and have approved on all what is mentioned on the front and back pages.</p>
            </div>
            <div class="signature">
                <img class="signature-img" src=${signature} alt="" width="80%" />
            </div>
            <div>
                <h6>توقيع العميل :</h6>
                <p>بتوقيعي على هذه الوثيقة أقر بأن جميع بياناتي صحيحة وأني وافقت على ما ذكر في الصفحتين الأمامية و الخلفية</p>
            </div>

        </div>

    </div>
</body>

</html>
    `
}