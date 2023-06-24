
# Blog Project 
## Technologies

Reactjs ,  Typescript , Tailwindcss  , expressjs , mongodb ,

<p align="left"> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/> </a> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a> </p>



یک پروژه بلاگ که کاربران قابلیت لاگین کردن - ایجاد پست و کامنت گذاری و هر قابلیت که یک بلاگ داره. 

همچنین هر نویسنده پست می تونه پست خودش رو ویرایش کنه اما اجازه ویرایش پست دیگران رو نداره . 

قابلیت کامنت گذاشتن و لایکن کردن همچنین share کردن هر پست به وسیله کاربران . 

قابلیت follow کردن و ارسال notifaction بار اعلام فالو شدن .


# directory : 

2 فولدر وجود داره به اسم های clinet و server که درون فولدر clinet فایل های مربوط به فرانت هست 

درون فولدر server فایل های مربوط به server . سرور به وسیله nodemon روی port 2023 لوکال ران میشه . 

در بخش فرانت reactjs به وسیله vitejs +typescript + swc ساخته شده . 

که با دستور `npm run dev` ران خواهد شد .

درون پوشه client فایل بندی ها مون به صورت زیر هست : 
<div align='center'>
  <img src='https://github.com/mosenn/MERN/assets/91747908/81ba2f5d-4718-485e-9f99-2491f2f9a4f2' alt='blog with react and expressjs'/>
</div>
  
# package.json 

پکیج های که سمت فرانت پروژه استفاده میشه : 

```javascript 
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^14.0.0",
    "@testing-library/user-event": "^14.4.3",
    "axios": "^1.4.0",
    "cloudinary-react": "^1.8.1",
    "jsdom": "^22.1.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.12.1"
  },
```

و همینطور Devdependencies : 
```javascript
  "devDependencies": {
    "@types/react": "^18.0.37",
    "@types/react-dom": "^18.0.11",
    "@typescript-eslint/eslint-plugin": "^5.59.0",
    "@typescript-eslint/parser": "^5.59.0",
    "@vitejs/plugin-react-swc": "^3.0.0",
    "autoprefixer": "^10.4.14",
    "eslint": "^8.38.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.3.4",
    "postcss": "^8.4.24",
    "tailwindcss": "^3.3.2",
    "typescript": "^5.0.2",
    "vite": "^4.3.9",
    "vitest": "^0.32.0"
  } 
```

# App.tsx

درون فایل app امدیم route بندی ها رو انجام دادیم به وسیله react-router-dom 

کامپونت ها import شده و با توجه به نیاز پروژه route بندی ها انجام شده . 
```javascript 
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
```

# component : 

در فولدر `component` کامپونت های مورد نیاز و تکرار شدنی  قرار داده شده . 


<div algin='center'>
<img src='https://github.com/mosenn/MERN/assets/91747908/0a083629-ef75-4ff3-8527-c0c621ba6f70' alt='react component'/>
</div>

درون `toast` یک پیام به ما نشون میده . و می تونیم از این کامپونت هر جا خواستیم استفاده کنیم . 

درون پروژه در بخش های login , register از این componet استفاده کردیم . 

درون `header` که همونظور که از اسمش مشخص هست header سایت رو قرار دادیم و در app.tsx قرار دادیم 

به این دلیل که  header رو درون تمای بخش های پروژه می خوایم که باشه . 

کامپونت داریم به اسم `button`  که دکمه های سایت ما رو تشکیل میده و هر جا نیاز به `button` درون پروژه باشه 

از کامپونت `button` استفاده می کنیم .


# pages

<div algin='center'>
<img src='https://github.com/mosenn/MERN/assets/91747908/d1c78c81-b02a-4f64-a862-cddcef440fac' alt='react component'/>
</div>

درون فولدر `pages` در واقع صحفات وب رو داریم .  

درون `home` پست ها رو نشون میدیم 

 در `register` ساخت اکانت رو داریم 
 
 در `login`  لاگین شدن رو داریم و بعد از لاگین  به صحفه `home` ریداریکت میشه 
 
 
 # Api Folder



<div algin='center'>
<img src='https://github.com/mosenn/MERN/assets/91747908/6f19569b-0a6b-4d7b-a0ad-39c04a37a463' alt='reactjs api'/>
</div>



### users.tsx 
درون فولدر `api` کار های مروبط به api رو انجام میدیم  . 

در فایل users.tsx به وسیله axios مراحل ثبت نام کاربر و لاگین شدن کاربر انجام میشه . 

در مرحله اول axios ایمپورت میشه . 

```javascript 
import axios from "axios";

```

### Credentials in client with axios
به دلیل اینکه در سمت سرور coockie رو ست میشه و ارسال میشه به وسیله یک api که نوشته شده . 

در سمت client نیاز هست از `Credentials` استفاده کنیم . 

نحوه سست کردن `Credentials` : 
```javascript
axios.defaults.withCredentials = true;
```

در axios اپشن credentials به صورت پیش فرض false هست بنابراین نیاز داریم که به true تغییرش بدیم .

### Base url axios option

می تونیم از اپشن baseUrl axios استفاده کنیم برای ست کردن ادرس api مد نظرمون . 

```javascript
const baseUrl = axios.defaults.baseURL = "http://localhost:2023"
```
در واقع کد بالا شبیه کد پایین هست : 

```javascript
const url = "http://localhost:2023"
```

### Function register user 
فانشن `registerUser` کار ثبت نام کاربر رو انجام میده . 

در واقع اطلاعات کاربر رو میگیره و به سمت server ارسال می کنه . 

```javascript
export const registerUser = async (

};
```
**نکته** : تمامی فانکشن های مربوط به api از نوع async هستند و همینطور export شدن 



### register user function parameters

- UserRegisterData


```javascript
export const registerUser = async (
  UserRegisterData: registeruserType,
) => {
};
``` 
#### Parameter UserRegisterData

خب parameter userRegisterData در واقع یک state هست . 

که این state تمامی value های مربوط به input های ثبت نام رو دورن خودش ذخیره کرده . 

به طور خلاصه اطلاعات کاربری که ثبت نام کرده رو درون خودش داره . 


#### Type UserRegisterData

از اونجای که از تایپ اسکریپت استفاده می کنیم . 

نوع تایپ parameter مشخص شده . 

```javascript
export const registerUser = async (
  UserRegisterData: registeruserType,

) => {
};
```

نوع تایپ parameter UserRegisterData برابر شده با registeruserType . 

```typescript
interface registeruserType {
  username?: string;
  password: string;
  confirmPassword: string;
  pic: {};
}

```

که در واقع یک `interface` تعریف شده هست . 


**نکته**: برای تعریف کردن نوع تایپ ها از قابلیت interface تایپ اسکریپت استفاده شده .   

که همونطور که مشاهده میشه اطلاعات مربوط به کاربر هست که برار با `string` . 




فانکشن  registerUser میشه کد زیر : 
```javascript
export const registerUser = async (
  UserRegisterData: registeruserType,
  
) => {
};
```

**نکته**: علامت ؟ در کد interface بالا به این معنی optional بودن هست . 


در واقع ؟ چک می کنه اگر مقادیر ما وجود داشتند  `undefinde` نبودند .

نوع تایپ شون `string` هست . 

دقیقا همون کار که در javascript انجام میدیم . 

مثلا : 
```javascript
data?.users.map((user)=> return <p>{user}</p>)
```
در کد بالا از ؟ استفاده کردیم و گفتیم اگر که data وجود داشت . 

بیاد users ها رو map کنه . 

# countinue register user function

خب پارامتر های فانکشن registerUser رو توضیح داده شد . 

درون فانکشن به value input ها دسترسی داریم  . 

```javascript
export const registerUser = async (
  UserRegisterData: registeruserType,
) => {
try {}
  catch(err) {}
};
```

برای اینکه بتونیم error هارو هم داشته باشیم بلاک catch رو تعریف کردیم . 

در کل error هارو handle کنیم از block try / catch استفاده می کنیم . 
```javascript
export const registerUser = async (
  UserRegisterData: registeruserType,

) => {

  try {
  } catch (err: any & { response?: unknown }) {
  }
};
```
درون بلاک try میایم اطلاعات خودمون رو به وسیله axios می فرستیم .

چون به ادرس api خودمون rigster/ میایم اطلاعات کاربر رو ارسال می کنیم . 

قبلا هم که [baseUrl](#base-url-axios-option) بالا تر توضیح دادیم 


```javascript
export const registerUser = async (
  UserRegisterData: registeruserType,

) => {

  try {
    const register = await axios.post(`${baseUrl}/register`, UserRegisterData, {

    });
    );

  } catch (err: any & { response?: unknown }) {
  }
};
```
در واقع userRegisterData اطلاعات کاربری هست که ثیت نام کرده رو می فرستیم . 

که  userRegisterData یک state هست درون کامپونت Register.tsx که اطلاعات input هارو ذخیره می کنه .

 



در ادامه `headers` ست شده . 


```javascript
    const register = await axios.post(`${baseUrl}/register`, UserRegisterData, {
      headers: { "Content-Type": "application/json" },
    });
```
در نهایت متغیری که برای ارسال اطلاعات به اسم `register` تعریف شده . 

درون بلاک try میایم return می کنیم . 

به این دلیل که می خوایم اطلاعاتی که api به ما response میده رو درون کامپونت [Register.tsx](#function-register-user)

دسترسی داشته باشیم . response که api /register به ما میده در واقع اطلاعات کاربری هست که ثبت نام کرده . 

در نهایت درون بلاک try کد زیر رو خواهیم داشت : 
```javascript
export const registerUser = async (UserRegisterData: registeruserType) => {
  // console.log(UserRegisterData);
  try {
    const register = await axios.post(`${baseUrl}/register`, UserRegisterData, {
      headers: { "Content-Type": "application/json" },
    });
    // console.log(register, "response user is register");
    return register;
  } catch (err: any & { response?: unknown }) {

  }
};
```
**نکته**: می تونیم برای اطمینان بیشتر که `data` رو داریم یا خیر یک `console.log` داشته باشیم

قبل از `return` 

```javascript
 console.log(register, "response user is register");
```

### catch block 

درون بلاک `catch` میایم ارور های مربوط به register error کنترل می کنیم . 

اگر یادتون باشه یک [setErrorRegister](#parameter-seterrorregister) به عنوان parameter داشتیم . 

که وظیفه این set state در واقع ذخیره کردن ارور های مربوط به ثبت نام کاربر هست  . 

در نتیجه این ارور هارو درون یک state به اسم errorRegister خواهیم داشت . 

که این state در کامپونت Register.tsx ایجاد شده . 

از اونجای که ارور های ما از سمت سرور به صورت ابجکت ارسال میشه . 

در نتیجه state errorRegister به صورت ابجکت است . 

بلاک catch : 

```javascript
catch (err: any & { response?: unknown }) {
    const errors = err?.response?.data;
    return errors;
  }
```

نوع تایپ err رو روی any گذاشتیم و نوع response رو گفتیم اگر `undefinde` نبود بیاد `unknown` باشه

به این دلیل که نمی تونیم تشخیص بدیم که نوع تایپ err دقیقا چی می تونه باشه . 

خب در نهایت کد کامل register function به صورت زیر هست : 

```javascript
export const registerUser = async (UserRegisterData: registeruserType) => {
  // console.log(UserRegisterData);
  try {
    const register = await axios.post(`${baseUrl}/register`, UserRegisterData, {
      headers: { "Content-Type": "application/json" },
    });
    // console.log(register, "response user is register");
    return register;
  } catch (err: any & { response?: unknown }) {
    const errors = err?.response?.data;
    return errors;
  }
};
```
که اطلاعات کاربر رو میگیره و به سمت `server` ارسال می کنه . 

در نهایت `server` اطلاعات کاربر رو در دیتا بیس ذخیره می کنه . 

# Function LoginUser 

درون فولدر [api](#base-url-axios-option) در فایل user.tsx یک فانکشن برای login شدن کاربران داریم . 

کار این فانکشن ارسال اطلاعات کاربرانی که قصد لاگین کردن رو دارند به سمت `server` . 

برای این مورد server یک api در نظر داره . 

متد api از نوع `post`  . 

ادرس api مد نظر ما برای لاگین login/ . 

**نکته** : قبل تر اشاره کرده بودیم که تمامی فانکشن ها از نوع `async` هستند و همینطور `export` شدند .

```javascript
export const loginUser = async (userLoginData: loginValue) => {

};
```
یه نگاهی به import های درون login.tsx بندازیم . 


```javascript
   const { setUserInforOnline, userInfoOnline } = useGlobalContext();
  const navigate = useNavigate();
  const [toast, setToast] = useState<Boolean>(false);
```

یک state داریم که از useGlobalContext داره گرفته میشه . 

که در بخش [Header.tsx](#headertsx-componet) ساخت  [context](#create-context) گفته شده . 

### loginUser parameter 

فانکشن loginUser یک parameter داره به اسم userLoginData که در واقع یک state .

درون این state یک ابجکت قرار گرفته به صورت default . 

این state درو کاممپونت Login.tsx تعریف شده و همونجا هم به فانکشن loginUser پاس داده شده . 

### loginUser parameter type 

تایپ این پارامتر که گفتیم یک ابجکته و حاوی دو تا key به اسم `username` و `password` . 

این دوتا درواقع value اینپوت هست که کاربر برای login شدن وارد می کنه . 

هر دو `string` هستند   , `interface` پارامتر  : 

```typescript
interface loginValue {
  username: string;
  password: string;
}
```

**نکته** : هر فانکشن مربوط به کار با api یک بلاک try / catch داره . 

که درون بلاک try سعی بر گرفتن response میشه . 

و در صورت هر گونه error بلاک catch اجرا میشه . 

درون بلاک catch می تونیم ارور هامون رو کنترل کنیم . 


کد فانکشن loginUser : 
```javascript
export const loginUser = async (userLoginData: loginValue) => {
  try {
    const user = await axios.post(`${baseUrl}/login`, userLoginData);
    console.log("User Data in api LoginUser Function", user);
    return user;
  } catch (err) {
    console.log(" login api err ", err);
     return err;
  }
};
```
در بلاک try به وسیله axios دیتا مد نظرمون 

که  اطلاعات کاربر که قصد لاگین هست رو فرستادیم . 

در ادامه `user` که لاگین شده رو return شده .
```javascript
return user;
```

به این دلیل که می خوایم بعدا در جای دیگه از این data که داریم استفاده کنیم . 


# Function profileUser 

فانکشن profileUser در واقع برای نشون دادن اطلاعات کاربر استفاده میشه . 

کاربری که لاگین کرده اطلاعات کاربر لاگین شده در فانکشن profileUser برگشت داده میشه . 

اطلاعات کاربر رو میگیریم و ذخیره می کنیم که جلو تر بررسی می کنیم . 

در نهایت هر جا خواستیم نشون میدیم . 

```javascript
export const profileUser = async () => {
  try {
    const user = await axios.get(`${baseUrl}/profile`);
    return user.data;
  } catch (err) {
    console.log(" profile api err", err);
        return err;
  }
};
```

# Function logoutUser 

این فانکشن در فرانت اند در فولدر api کار logout شدن کاربر انجام میده . 

یک api برای اینکار نوشته شده که به محض ران شدن این فانکشن کاربر مد نظر logout میشه . 

```javascript 
export const logoutUser = async () => {
  try {
    const user = axios.post(`${baseUrl}/logout`);
    return user;
  } catch (err) {
    console.log(" logoutUser api err", err);
    return err;
  }
};
```
# Function uploadRegisterImage 

اخرین فانکشنی که در بخش api داریم مربوط به اپلود شدن عکس پرفایل کاربر هست . 

کاربر در زمان ثبت نام می تونه یک عکس رو به عنوان پرفایل خودش انتخاب کنه . 

ایتجا از یک سایت خارجی که فضای ابری در اختیار ما قرار میده استفاده کردیم . 

اسم سایت `coludinary` هست که می تونیم فایل درونش اپلود کنیم . 

در نهایت به عنوان ریسپانس یک لینک انلاین برای دانلود فایل مد نظر مون میده . 

``` javascript
const cloudinaryApi = `https://api.cloudinary.com/v1_1/cloud_name/image/upload`;

export const uploadRegisterImage = async (pic: {} | any) => {
  try {
    const data = new FormData();
    data.append("file", pic);
    data.append("upload_preset", "****");
    data.append("cloud_name", "****");
    const res = await axios.post(cloudinaryApi, data, {
      withCredentials: false,
    });
    console.log(res, "response");
    return res;
  } catch (err:any) {
    console.log(err);
    return err;
  }
};
```

### Paremeter uploadRegisterImage

یک parameter به اسم pic هست .

 عکسی هست که کاربر به عنوان عکس پرفایل انتخاب می کنه . 

 این عکس از روی سیستم کاربر گرفته میشه . 

 برای اینکه بتونیم این عکس ارسال کنیم به api سایت `cloudinary`  . 

 نیاز هست که از `FormData` درون `javascript` استفاده کنیم . 

 3 مورد رو append می کنیم درون FormData که مورد اول file هست . 

 مقدار file رو برابر با pic قرار میدیم عکسی که کاربر گذاشته . 

 2 مقدار بعد مربوط به api سایت `cloudinary` هست . 

این 2 مقدار نیاز هست که ست شن یکی `upload_preset` هست که از خوده سایت باید بگیریم 

یکی `cloud_name` هست که اینو هم از داخل dashboard سایت `cloudinary` بر میداریم . 

**نکته** : cloud_name هم نیازه که append شه هم اینکه در ادرس api استفاده شه 

```javascript 
const cloudinaryApi = `https://api.cloudinary.com/v1_1/cloud_name/image/upload`;
```
```javascript 
  data.append("cloud_name", "*****");
  ```

از موارد cloud_name و upload_preset نیاز هست که به صورت secret باشند .

از دسترس دیگران خارج باشن تا شخصی از این دو مورد و اکانت شما نتونه استفاده کنه .

در ادامه فانکشن داریم دیتای خودمون رو که در واقع عکس کاربر هست رو پست می کنیم . 

به سایت `cloudinary` که یک api در اختیار ما قرار داده برای اپلود فایل . 

اینجا عکس که درون فرم دیتا قرار دادیم و موارد مربوط به api رو ست کردیم 

ارسال می کنیم به api cloudinary 

```javascript
  const res = await axios.post(cloudinaryApi, data, {
    withCredentials: false,
  });
```
**نکته** :
در اینجا options [withCredentials](#credentials-in-client-with-axios) روی false گذاشتیم . 

از لینک بالا می تونید section مربوط به withCredentials رو بخونید . 

به این دلیل که قبلا برای تمامی api ها گفتیم withCrednetials":true باشه . 

اما وقتی که می خوایم با یک api دیگه کار کنیم ممکنه به ما ارور `cors policy` بده . 

و api ما به درستی کار نکنه . 

به همین دلیل برای کار با api cloudnariy نیاز داریم

که `withCredentials` رو روی false بزاریم 

تا با ارور cors policy مواجه نشیم . 

در ادامه `response` که در یافت می کنیم return شده . 

یک بار دیگه به کل فانکشن نگاه کنیم : 

```javascript 
 const cloudinaryApi = `https://api.cloudinary.com/v1_1/cloud_name/image/upload`;
export const uploadRegisterImage = async (pic: {} | any) => {
  const data = new FormData();
  data.append("file", pic);
  data.append("upload_preset", "*****");
  data.append("cloud_name", "*****");
  const res = await axios.post(cloudinaryApi, data, {
    withCredentials: false,
  });
  return res;
};
  ```
ریسپانسی که api سایت `cloudinary` به ما برگشت میده . 

لینک انلاین عکس اپلود شده هست . 

در نهایت لینک انلاین عکس رو به سمت `server` درون کامپونت Register.tsx پاس میدیم . 

و از عکسی که کاربر اپلود کرده و ما به لینک اش دسترسی داریم . 

به عنوان عکس پرفایل استفاده می کنیم . 


تا به اینجا در مورد فولدر [api](#api-folder) درون clinet صحبت کردیم . 

می خوایم بریم سراغ کامپونت ها . 

# Components 

### Register.tsx component

درون این کامپونت مراحل ثبت نام کاربر انجام میشه . 

یک فرم داریم که درونش input های مربوط به ثبت نام کاربر هست . 

که value های اینپوت هارو ذخیره می کنیم و به سمت سرور ارسال می کنیم . 

و البته `validation` سمت server انجام شده  . 

اگر error مربوط به register باشه به عنوان response می گیریم . 

در نهایت هنگام submit شدن form به کاربری که قصد register داره نمایش میدیم . 


صحفات رو درون `pages` قرار دادیم  . 

کامپونت Register.tsx درون pages هست . 


![image](https://github.com/mosenn/MERN/assets/91747908/a4d89f51-b53f-4612-8e73-2bae7c410898)


درون کامپونت Register.tsx  یک فروم return میشه به همراه input ها و یک toast .

```javascript
  return (
    <div className="h-[90vh]  justify-center items-center flex">
      <img
        src="https://www.file.io/mF2X/download/PYCrjx1HYrkG.men-1.jpg"
        alt="test"
      />
      {toast && (
        <Toast text={"register is success redirect to login"} toast={toast} />
      )}

      <form
        onSubmit={handleSubmit}
        action=""
        className=" bg-gray-300 rounded-lg grid p-3 m-2 md:w-[60%]"
      >
        <label className="ml-2 font-semibold text-gray-900" htmlFor="username">
          username
        </label>

        {errorRegister?.username}
        <input
          onChange={handleOnchnage}
          className="p-1 m-2 border border-solid border-gray-300 rounded-sm"
          type="text"
          id="username"
          name="username"
        />

        <label className="ml-2 font-semibold text-gray-900" htmlFor="password">
          password
        </label>
        {errorRegister?.password}

        <input
          onChange={handleOnchnage}
          className="p-1 m-2 border border-solid border-gray-300 rounded-sm"
          type="text"
          id="password"
          name="password"
        />
        <label
          className="ml-2 font-semibold text-gray-900"
          htmlFor="confirmPassword"
        >
          confirm password
        </label>
        {errorRegister?.confirmPassword}
        <input
          onChange={handleOnchnage}
          className="p-1 m-2 border border-solid border-gray-300 rounded-sm"
          type="text"
          id="confirmPassword"
          name="confirmPassword"
        />
        <label className="ml-2 font-semibold text-gray-900" htmlFor="password">
          upload profile picture
        </label>
        <input
          onChange={handleOnchnage}
          className="p-1 m-2 border border-solid border-gray-300 rounded-sm"
          type="file"
          id="pic"
          name="pic"
          accept=".png, .jpg, .jpeg .webp"
        />
        <div className=" m-1 p-1 w-full flex justify-start md:justify-center items-start">
          <Button
            className="bg-blue-500 hover:bg-blue-300 w-[99%] rounded p-3 text-zinc-50 font-semibold"
            text="Register"
            type="submit"
          />

          <button
            className="bg-blue-500 hover:bg-blue-300 w-[99%] rounded p-3 text-zinc-50 font-semibold"
            type="button"
            onClick={Uploadimage}
          >
            upload image
          </button>
        </div>
      </form>
    </div>
  );
```

درون `form` یک فانکشن داریم برای `submit` شدن فرم . 

به اسم handleSubmit . 

```javascript
      <form
        onSubmit={handleSubmit}
        action=""
        className=" bg-gray-300 rounded-lg grid p-3 m-2 md:w-[60%]"
      >
```

در input ها فانکشن `onChangehandle` رو داریم . 

دقت کنید که name هر input منحصر به فرد خودش هست . 

و نیاز هست با state که value های اینپوت رو ذخیره می کنه یکی باشه . 

```javascript
    <label className="ml-2 font-semibold text-gray-900" htmlFor="username">
          username
        </label>

        {errorRegister?.username}
        <input
          onChange={handleOnChange}
          className="p-1 m-2 border border-solid border-gray-300 rounded-sm"
          type="text"
          id="username"
          name="username"
        /> 
```
هر input درونش یک فانشکن به اسم `handleOnChange` اتفاق می افته . 

که این فانکشن وظیفه گرفتن value اینپوت ها رو داره . 

و value اینپوت ها رو ذخیره می کنه درون یک state . 

در ادامه ارور های مربوط به هر input رو در پایین label تعریف شده . 

```javascript
  {errorRegister?.username}
```

خب نوبت به گرفتن تمامی value های input ها میشه برای اینکار نیاز به یک state داریم . 

```javascript
  const [register, setRegister] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    pic: {},
    //* default image set
    // pic: "https://i.postimg.cc/PfvxsgPB/woman-2.png",
  });
```

همونطور که در کد بالا مشاهده میشه state تعریف شده یک object هست . 

مقادیری که می خوایم ذخیره کنیم `key` ها رو درون object تعریف می کنیم . 

فقط یک مورد از این key ها متفاوت هست که `pic` هست . 

نوع `pic` یک ابجکت گذاشتیم جلو تر دلیل اینکار مشخص میشه . 

اگر خواستیم به صورت default عکس کاربر رو ست کنیم می تونیم یک عکس upload کنیم و ادرس شو درون pic قرار بدیم . 

البته این موضوع رو در سمت `server` هم می تونیم هندل کنیم . بازم جلو تر بررسی می کنیم . 

خب حالا نوبت به تعریف فانکشن `handleOnChange` می رسه که این فانکشن رو برای تمامی اینپوت ها تعریف می کنیم . 

```javascript
 const handleOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "pic") {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        setRegister({ ...register, pic: file });
      }
    } else {
      setRegister({ ...register, [e.target.name]: e.target.value });
    }
    console.log("Regiser State in onChange func", register);
  };
```
پارامتر `e` در واقع event هست که به input ها اشاره داره . 

به دلیل اینکه از `type script` استفاده می کنیم . 

نوع type هر event و هر parameter رو مشخص می کنیم . 

در اینجا نوع این event در واقع `<React.ChangeEvent<HTMLInputElement` هست . 

نوع هر event نسبت به کاری که انجام میدن نوع type شون متفاوت هست . 

در قدم اول  یک `if` داریم برای چک کردن `name` که اگر pic بود . 

بیاد مقدار `[0].?files` رو بگیره و درون state که register که تعریف کردیم ذخیره کنه . 

اینکار به این دلیل هست که value pic با بقیه input ها متفاوت هست . 

و `[0].?files` به اولین عکسی که انتخاب شده توسط کاربر اشاره داره . 

```javascript 
    if (e.target.name === "pic") {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        setRegister({ ...register, pic: file });
      }
```

یک if درونش گفتم اگر name === pic بود  . 

یک متفییر به اسم file ایجاد شه `[0].?files` رو درونش خودش نگه داره . 

همچنین باز نیاز هست که نوع typesh مشخص شه که اینجا یک `as HTMLInputElement` تعریف شده برای type

در نهایت باز یک if گفتیم اگر که file بود . 

و state تعریف شده register بیاد set شه تمامی مقادیر قبلی خودش رو حفظ کنه . 

اما مقدار `pic` که ابجکت بوده برابر شه با مقدار file . 

که قبل تر درون یک متغییر ذخیره کردیم . 

یک بار دیگه به کد نگاه کنیم : 


```javascript 
    if (e.target.name === "pic") {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        setRegister({ ...register, pic: file });
      }
```

در ادامه یک else داریم که میایم مقادیر دیگه رو هم که `string` هستند ذخیره می کنیم . 

```javascript
 else {
      setRegister({ ...register, [e.target.name]: e.target.value });
    }
```
تمامی مقادیر قبلی state register رو ذخیره کردیم به وسیله `spread operator`  . 

**نکته** : کل state که تعریف کرده بودیم یک ابجکت هست . در نتیجه زمان set شدن . 

کل شو درون یک ابجکت  {}  قرار میدیم . 

و درون یک ارایه `key` رو می زاریم name که برای input ها تعریف کردیم . 

در نهایت value هر input رو ذخیره می کنیم . 

**نکته** : نیازه هست name که برای input ها تعریف می کنیم با key که برای state ابجکت تعریف کردیم در ابتدا 

یکی باشند . 
```javascript
        <input
          onChange={handleOnChange}
          className="p-1 m-2 border border-solid border-gray-300 rounded-sm"
          type="text"
          id="username"
          name="username"
      /> 
```
```javascript
  const [register, setRegister] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    pic: {},
  });
```

مقدار name که برای input تعریف کردیم `username` هست . 

مقدار key ابتدایی برای `state` هم username هست . 

فانکشن `handleOnchange` رو نوشتیم و تموم شد . 

کل کاری که انجام میده گرفتن مقدار value اینپوت ها و ذخیره اونها درون state هست . 

زمانی که , فانکشن `handleOnchange` رو زمانی که برای input ها event Onchange اتفاق می افته اعمال میشه .


```javascript
        <input
          onChange={handleOnChange}
          type="text"
          id="username"
          name="username"
      /> 
```

# Submit Function Register.tsx 

یک فانکشن به اسم `handleSubmit` داریم در کامپونت `Register.tsx` . 

این فانکشن زمانی که from ثبت نام ما submit میشه اتفاق می افته . 

```javascript
     <form
        onSubmit={handleSubmit}
        action=""
      >
```

درون این فانکشن اول نوع type ایونتی که داره رخ میده رو مشخص می کنیم . 

درون فانکشن e.preventDefault رو داریم . 

```javascript
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
```

در ادامه می تونیم یک لاگ بگیریم از state که وظیفه ذخیره کردن value های input رو داشت . 

که ببینم به درستی اینکار انجام میشه یا نه . 

```javascript
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("register state in submit form", register);
  };
```
بعد از اینکه input ها رو درون صحفه پر کردیم و فروم خودمون رو submit کردیم . 

**نکته** : نیاز هست یک button درون فروم داشته باشیم که نوع type button ما از نوع submit باشه . 
که button تعریف شده می تونه یک کامپونت باشه . 

```javascript
   <Button
            text="Register"
            type="submit"
          />
```

بعد از لاگ گرفتن و مظمئن شدن از value های input های خودمون نوبت به ارسال اونها به سمت سرور میشه . 

یاد اوری : یک فولدر api داشتیم که تمامی کار با [api](#api-folder) رو درونش قرار دادیم . 
```javascript
 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("register state in submit form", register);
    const user = await registerUser(register);

  };
  ```

فانکشن registerUser رو از api فولدر و فایل user.tsx امدیم import کردیم 

و درون فانکشن handleSubmit داریم صداش می زنیم . 

مقدار های input ها رو که درون state register ذخیره کرده بودیم رو داریم بهش پاس میدیم 

فانکشن `registerUser` رو در این [بخش](#function-register-user) بررسی کردیم 

درون api فولدر یک فایل به اسم [user.tsx](#userstsx) داریم که api ها مربوط به user رو انجام میده . 

مثل register / login و ... 


در ادامه reponse که فانکشن `registerUser` به ما میده اطلاعات کاربری هست که ثبت نام کرده . 

می تونیم یک لاگ داشته باشیم . 

```javascript
 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("register state in submit form", register);
    const user = await registerUser(register);
 console.log(user, "user");
  };
  ```

بعد از اینکه دیتا ها رو داشتیم یک فانکشن به اسم handleError داریم . 

که وظیفه اش هندل کردن ارور های مربوط به ثبت نام کاربر هست 


```javascript 
 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("register state in submit form", register);
    const user = await registerUser(register);
    console.log(user, "user");
    handleError(user);
  };
```

در واقع اگر موقع ثبت نام error داشته باشیم باز به عنوان دیتا خواهیم داشت . 

به این دلیل که ارور ها از سمت سرور دارند میان . 

پس کار فانکشن handleError کنترل کردن ارور های ثبت نام هست . 

```javascript
  const handleError = (err: {}) => {
    setErrorRegister(err);
  };
```
مقدار err که به عنوان parameter گرفته فانکشن handleError در واقع ارور های ثبت نام کاربر هستند . 

که از بلاک catch فانکشن `registerUser` داره گرفته میشه که این فانکشن  در فولدر api در فایل user.tsx قرار داره . 

که درون فانکشن یک state برای error ها set میشه که این state هم یک ابجکت هست 

به این دلیل ارور های که از سمت سرور میاد به صورت ابجکت هستند . 

```javascript 
  const [errorRegister, setErrorRegister] = useState<ErrorRegister>({});
```

در نهایت اگر ارور داشته باشیم درون این state ذخیره میشه و می تونیم نشون بدیم درون صحفه 

گفتیم که در زیر هر label مربطو به هر input ارور های مربوط به همون input رو نمایش میدیم . 


```javascript 
 <label  htmlFor="username">
          username
        </label>
        {errorRegister?.username}
        <input
          onChange={handleOnChange}
          type="text"
          id="username"
          name="username"
        />
```

حالا می خوایم بعد از داشتن اطلاعات اگر که بود یک `toast` نمایش بدیم . 

که به کاربر بگیم ثبت نام که انجام داده موفقیت امیز بوده . 

و بعد از چند ثانیه کاربر رو به صحفه login ریداریکت کنیم . 

نیاز به یک if داریم که چک کنه ببینیم ایا دیتا و user هست . 

که اینکارو با status انجام شده . 

```javascript 
 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("register state in submit form", register);
    const user = await registerUser(register);
    console.log(user, "user");
    handleError(user);
    if (user?.status === 201) {
      setToast(true);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  };
```

چک کردیم اگر status ما برابر با `201` بود بیاد یک state رو true کنه که این state وظیفه نشون دادن toast رو بر عهده داره . 

در صورت اینکه state toast true باشه یک پیام نمایش داده میشه درون صحفه . 

و بعد از اون یک `setTimeout` اتفاق بیوفته که درونش `navigate` کنه به login/ که در واقع ادرس صحفه login هست . 

در مدت زمان 3000 که میشه 3 ثانیه . 

در اینجا navigate در واقع hook درونی react-router-dom هست . 

```javascript
import { useNavigate } from "react-router-dom";
const Register = () => { 
  const navigate = useNavigate();
} 
  ```


برای ست کردن `toast` می تونیم به صورت دستی با animation css یک باکس طراحی شه . 

و بعد از true شدن یک state نمایش داده شه .

```javascript
const Register = () => { 
  const [toast, setToast] = useState<Boolean>(false);
       {toast && (
        <Toast text={"register is success redirect to login"} toast={toast} />
      )}
} 
```

# Toast componet
که toast درواقع یک کامپونت مجزا هست . از این کامپونت برای login هم استفاده می کنیم . 

در واقع نمایش داده شه یا نه به وسیله یک state boolean تعریف شده . 

که به وسیله `props` مشخص شده . 

همینطور `text` که نمایش میده هم به وسیله props مشخص میشه . 

که type props های پاس داده شده درون یک interface مشخص شده . 
```javascript
interface propsToast {
  text: string;
  toast: Boolean;
}
const Toast = ({ text, toast }: propsToast) => {
  return (
    <div
      className={` bg-green-300 w-[250px] fixed text-center  p-[10px] rounded font-semibold text-[#6f6f6f]  ${
        toast && "showToast"
      } `}
    >
      <p>
        <span>🎉</span> {text}
      </p>
      <div
        className={`absolute bg-blue-300 w- h-[3px] bottom-[-3px] left-0 rounded-sm ${
          toast && "loadingRedirect"
        }`}
      ></div>
    </div>
  );
};
export default Toast;
```

# Login.tsx component . 

بعد از ثبت نام کردن کاربر لاگین شدن کاربر رو داریم . 

که بتونه با اکانتی که ساخته لاگین کنه . 

برای اینکار مثل Register.tsx یک فروم داریم که حاوی 2 input هست . 

که مشخصات کاربری که قصد لاگین رو داره میگیره و به سمت `server` ارسال می کنه . 



```javascript
  return (
    <div className="h-[90vh]  justify-center items-center flex ">
      {toast && <Toast toast={toast} text={"you are login"} />}
      <form
        onSubmit={handleSubmit}
        action=""
        className=" w-[90%] bg-gray-300 rounded-lg grid p-3 m-2 md:w-[60%]"
      >
        <label className="ml-2 font-semibold text-gray-900" htmlFor="username">
          username
        </label>
        <input
          onChange={onchangeHandle}
          value={loginValue.username}
          className="p-1 m-2 border border-solid border-gray-300 rounded-sm"
          type="text"
          id="username"
          name="username"
        />

        <label className="ml-2 font-semibold text-gray-900" htmlFor="password">
          password
        </label>
        <input
          onChange={onchangeHandle}
          value={loginValue.password}
          className="p-1 m-2 border border-solid border-gray-300 rounded-sm"
          type="text"
          id="password"
          name="password"
        />
        <div className=" m-1 p-1 w-full flex justify-start md:justify-center items-start">
          <Button
            className="bg-blue-500 w-[99%] rounded p-3 text-zinc-50 font-semibold"
            text="Login"
            type="submit"
          />
        </div>
      </form>
    </div>
  ); 
```

درون فرم  login.tsx فانکشن handleSubmit  رو داریم . 
```javascript
      <form
        onSubmit={handleSubmit}
        action=""
        className=" w-[90%] bg-gray-300 rounded-lg grid p-3 m-2 md:w-[60%]"
      >
```

درون هر دو input فانکشن handleOnchange رو داریم . 
```javascript
     <input
          onChange={onChangeHandle}
          value={loginValue.password}
          type="text"
          id="password"
          name="password"
        />
```



که برای state مد نظر یک interface type script تعریف شده 


```typescript
interface loginValue {
  username: string;
  password: string;
}
```

این state وظیفه ذخیره سازی value دو input فرم login رو بر عهده داره . 
```javascript
  const [loginValue, setLoginValue] = useState<loginValue>({
    username: "",
    password: "",
  });
```
که فانکشن onChangeHandle کار ذخیره کردن value های input هارو درون یک state انجام میده . 

```javascript 
 const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
  };
```


فانکش handleSubmit کار ارسال value های گرفته شده input هارو به سمت سرور انجام میده . 

```javascript 
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = await loginUser(loginValue);
  }
```
فانکشن [loignUser](#function-loginuser) درون فولدر api در فایل user.tsx تعریف شده . 

که اینجا state مربوط که وظیفه ذخیره سازی value input ها فرم لاگین رو داره به loginUser پاس داده شده . 

در نهایت response که میده مشخصات کاربر هست که لاگین شده . 

یک if داریم درون فانکشن که status کد رو چک می کنه . 

گفته شده اگر `user.status === 200`  بیاد state مربوط به toast رو true کنه . 

یک state گلوبال به اسم `setUserInforOnline(user.data)`

وسیله `context` تعریف کردیم که مشخصات کاربری که لاگین کرده رو ذخیره می کنه . 

همینطور `navigate` کنه به صحفه home/ . درون یک `()setTimeout`

```javascript 
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = await loginUser(loginValue);
        if (user?.status === 200) {
      console.log("User Info In If Login.tsx componet", user);
      setToast(true);
      console.log(user, "user is login.jsx");
      setUserInforOnline(user.data);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }
```

**یاد اوری**:  route بندی ها درون App.tsx به وسیله react-router-dom انجام شده . 

```javascript 
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
```


# Header.tsx Componet 

یک کامپونت داریم به اسم `Header.tsx` که این کامپونت header وب سایت ما هست و قرار در تمامی صحفات نمایش داده شه . 

و مشخصات کاربری که لاگین کرده رو نشون بده مثل عکس پرفایل و همینطور `username` . 

درون `Header.tsx` ایمپورت های زیر رو داریم . 

```javascript 
import { Link } from "react-router-dom";
import { logoutUser, profileUser } from "../../api/users";
import { useGlobalContext } from "../../context/context";
import { useEffect } from "react";
```

دو تا فانکشن مربوط به api به اسم profileUser و همینطور logoutUser داریم . 

زمانی که کاربر لاگین می کنه سمت `server` یک token درون cookie ذخیره میشه . 

مشخصات درون این token وریفای شده و درون api مربوط به profileUser ارسال میشه . 

که در بخش سرور بیشتر بهش می پردازیم . 

در حال حاضر فانکشن profileUser حاوی اطلاعات کاربری هست که لاگین شده توسط token . 


**نکته** : این توکن سمت server ذخیره میشه 

### create context

<img src='https://github.com/mosenn/MERN/assets/91747908/a0f88736-0fdc-4834-a2eb-1cff7f5ccc99' alt='context in react'/>

یک فولدر به اسم context داریم و یک فایل به اسم context.tsx داریم . 

که میایم درونش context رو ایجاد می کنیم . 

به createContext , useContext , نیاز داریم از درون `react` میایم import رو انجام میدیم . 

```javascript
import { createContext, useContext, useState } from "react";
```

یک متغییر ایجاد می کنیم . 

به دلیل اینکه از type script داریم استفاده می کنیم .

نیاز هست  `default value`  مربوط به `createContext` رو تعریف کنیم . 

```javascript
const AppContext = createContext<MyContextValue>({
  name: "",
  setUserInforOnline: () => {},
  userInfoOnline: {},
});
```


یک interface به اسم `MyContextValue` داریم . 

که در وافع نوع تایپ های `default value` رو مشخص می کنه . 

```typescript 
interface MyContextValue {
  name: string;
  setUserInforOnline: React.Dispatch<React.SetStateAction<{}>>;
  userInfoOnline: {} | any;
}
```

در ادامه `appProvider` رو داریم که در واقع یک فانکشن هست . 

یک parameter به اسم `children` می گیره . 

**نکته** : این  children حتما باید به همین اسم باشه . با همین حروف کوچیک در غیر اینصورت context به مشکل می خوره . 

```javascript 
const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  let [userInfoOnline, setUserInforOnline] = useState<{}>({});
  return (
    <AppContext.Provider
    >
    </AppContext.Provider>
  );
};
```

درونش یک state تعریف کردیم از این state برای ذخیره سازی دیتای مربوط به کاربر لاگین شده استفاده می کنیم . 

خب از `AppContext` که در واقع createContext رو درون خودش داره استفاده می کنیم . 

یدونه `Provider` بهش اضافه می کنیم . 

میام children  رو قرار میدیم بین 2 provider که تعریف کردیم  . 



```javascript 
const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  let [userInfoOnline, setUserInforOnline] = useState<{}>({});
  return (
    <AppContext.Provider
    >
    {children}
    </AppContext.Provider>
  );
};
```

در ادامه یک value تعریف می کنیم .

مقادیری که نیاز داریم که به صورت گلوبال در کامپونت های دیگه دسترسی داشته باشیم . 

تعریف می کنیم 
```javascript 
const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  let [userInfoOnline, setUserInforOnline] = useState<{}>({});
  return (
    <AppContext.Provider
      value={{
        name: "mohsen",
        setUserInforOnline,
        userInfoOnline,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
```

حالا appProvider که ایجاد کردیم رو export می کنیم . 

```javascript 
export { AppProvider }; 
```

این appPorvider رو درون main.tsx میایم import می کنیم و کل کامپونت <App> رو درونش قرار میدیم . 


<img src='https://github.com/mosenn/MERN/assets/91747908/ee7abd4d-1fb3-4b22-80e3-6678b147c2f3' alt='context in react'>


```javascript
import { AppProvider } from "./context/context.tsx";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AppProvider>
    <App />
  </AppProvider>
);
```

بر می گردیم دورن فایل context 


<img src='https://github.com/mosenn/MERN/assets/91747908/a0f88736-0fdc-4834-a2eb-1cff7f5ccc99' alt='context in react'/>


یک arrow function ایجاد می کنیم و از `useContext` استفاده می کنیم . 


```javascript
export const useGlobalContext = () => {
  return useContext(AppContext);
};
```

حالا می تونیم از useGlobalContext هر جا که خواستیم استفاده کنیم . 

و مقادیر که به عنوان value به `AppContext.Provider` پاس دادیم . 

در هر کامپونتی که نیاز داشتیم به مقادیری که set کردیم استفاده می کنیم . 

# back to Header.tsx 

بعد از اینکه context خودمون رو تعریف کردیم . 

بر می گردیم به کامپونت Header.tsx . 

یک بار دیگه  import های این کامپونت رو ببینیم .
```javascript

import { Link } from "react-router-dom";
import { logoutUser, profileUser } from "../../api/users";
import { useGlobalContext } from "../../context/context";
import { useEffect } from "react";
```

خب useGlobalContext رو داریم می بینیم از درون context . 

میایم state که تعریف کردیم   رو از درون useGlobalContext می گیریم . 

```javascript
const Header = () => {
  let { userInfoOnline, setUserInforOnline } = useGlobalContext();
  }
```

**یاداوری** : از این state userInfoOnline درون کامپونت[Login.tsx](#function-loginuser) هم استفاده کردیم . 

### logout function 

فانکشن `logout` رو داریم .

که کاربر می تونه logout کنه در صورت لاگین بودن . 

این فانکشن در اصل یک api رو کال می کنه سمت `server` . 

که این api در واقع همون توکنی که برای لاگین شدن کاربر ست میشه . 

از cookie درون server پاک می کنه در نهایت کاربر logout میشه . 

یک window.reload برای رفرش شدن صحفه استفاده شده . 

که میشه یک لودینگ یا یک پیام به کاربر برای logout شدن نمایش داد . 

```javascript
  const logOut = async () => {
    await logoutUser();
    //* can set loading for logout take effect
    window.location.reload();
  };
```

فانکشن بعدی `takeUser` هست که در واقع اطلاعات کاربری که لاگین می کنه رو درون state گلوبال خودمون ذخیره می کنیم . 

```javascript
  const takeUser = async () => {
    const user = await profileUser();
    setUserInforOnline(user);
  };
```

**نکته** : اگر که براتون سواله که چرا در هر دو کامپونت هم Header.tsx و هم Login.tsx 

امدیم از state گلوبال استفاده کردیم و دیتای مربوط به user رو درون state userInforOnline ذخیره کردیم ! 

به این دلیل هست که برای اینکه صحفه رو نخوایم رفرش کنیم تا دیتای مربوط به کاربر رو به ما نشون بده . 

امدیم به اینصورت کار کردیم . که کاربر به محض اینکه لاگین کرد اطلاعاتش درون hedaer نمایش داده شه . 

اگر یکی از setState های مربوط به userInforOnline رو برداریم . 

به محض اینکه کاربر لاگین شه اطلاعات نمایش داده نمیشه و نیاز به رفرش به صورت دستی هست تا اطلاعات نمایش داده شه . 


در نهایت بعد از تعریف فانکشن `takeUser` درون ()useEffect میایم این فانکشن رو ران می کنیم . 

اینکار باعث میشه با هر بار ران شدن کامپونت Header.tsx اطلاعات کاربر از state گلوبال خونده میشه و نمایش داده میشه .

```javascript 
  useEffect(() => {
    takeUser();
  }, []);
```

کامپونت Header.tsx میاد اطلاعات کاربر رو نمایش میده اگر که لاگین باشه . 

در غیر اینضورت یک ul دیگه رو نمایش میده که link های مربوط به login شدن و ثبت نام درونش قرار دارند . 

و اگر کاربر لاگین بود اسم کاربر و عکس پرفایل رو در header نمایش میده به همراه یک button که مسئول logout شدن کاربر هست . 

در واقع button فانکشن [logout](#logout-function) رو اجرا می کنه . 

در نهایت کامپونت Header.tsx میاد jsx زیر رو return می کنه : 


```javascript 
  return (
    <header className="bg-zinc-200 flex justify-between p-4 text-lg font-bold">
      <div className="flex items-center justify-center">logo</div>
      <nav>
        {userInfoOnline?.username ? (
          <ul className="flex items-center justify-end">
            <li className="mr-4">
              <img
                className="rounded-full w-[50px] h-[50px] border-2 border-blue-950"
                src={userInfoOnline.pic}
                alt={`profile image ${userInfoOnline?.username}`}
              />
            </li>
            <li className="mr-4">{userInfoOnline?.username}</li>

            <li className="mr-4">
              <button onClick={logOut}>logout</button>
            </li>
          </ul>
        ) : (
          <ul className="flex justify-end items-center">
            <li className="mr-4">
              <Link to="/login">login</Link>
            </li>
            <li className="mr-4">
              <Link to="/register">register</Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
```
