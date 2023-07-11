
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

# Components & pages

### Register.tsx page

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

که button تعریف شده یک `component` هست . 

```javascript
   <Button
            text="Register"
            type="submit"
          />
```

### Button Component 

![image](https://github.com/mosenn/MERN/assets/91747908/001b61a0-c9a8-4fad-ab80-70163e092092)

یک کامپونت `Button` داریم که هر جا نیاز شد از button استفاده کنیم می تونیم از این کامپونت استفاده کنیم . 

یک سری props که نیاز هست برای button پاس دادیم به کامپونت `Button` : 

```javascript
export default function Button({
  text,
  type,
  className,
  disabled,
  onClick,
}: buttonProps) {
```
نوع type props مربوط به کامپونت `Button` رو مشخص می کنیم  : 


```javascript
interface buttonProps {
  text?: string | any;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  onClick?: () => Promise<void>;
}
```

در نهایت کامپونت ما یک button میاد return می کنه و از این button هر جا که خواستیم استفاده می کنیم . 

و props های مورد نیازش رو بهش پاس میدیم . 


```javascript

export default function Button({
  text,
  type,
  className,
  disabled,
  onClick,
}: buttonProps) {
  return (
    <button
      disabled={disabled}
      type={type}
      className={className}
      onClick={onClick}
    >
      <span className="p-2"> {text}</span>
    </button>
  );
}
```
هر جا که خواستیم می تونید صدا بزنیم `Componen Button` رو و ازش استفاده کنیم .

و حتی function های متفاوتی بهش پاس بدیم . 

### continue Register.tsx page

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

# Toast Componet
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

# Login.tsx Page . 

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

# Posts in clinet 

در این قسمت از کلاینت می خوایم بخش ساخت پست رو ایجاد کنیم . 

بخش پنل کاربری رو ایجاد کنیم که هر کاربری که لاگین هست بتونه در بخش پنل خودش پست های که ایجاد کرده ببینه . 


بخش اپدیت شدن پست رو در پنل کاربری داشته باشیم به وسیله نویسنده خوده پست 

همینطور بخش پاک کردن پست رو داشته باشیم . 

و در نهایت تمامی پست هارو نمایش بدیم در صحفه اصلی  که در هر پست نشون دهنده این باشه که چه تاریخی ساخته شده . 

و به وسیله چه کاربری ایجاد شده . 

**نکته** : تمامی این موارد گفته در بالا در سمت سرور انجام شده و `api` مربوط به تمامی کار های مربوط نوشته شده . 

**نکته** : برای `update` کردن  و `delete` کردن همیشه نیاز به `objectId` از سمت دیتا بیس هست . 


# Post api 

قدم اول درون فولدر `api` در کلاینت امدیم یک فایل به اسم `post` ساختیم . 

در فایل `post.tsx` امدیم کارهای `api` مربوط به ساخت پست و اپدیت و

همینطور پاکد کردن و گرفتن تمامی پست ها رو انجام دادیم . 

<img src='https://github.com/mosenn/MERN/assets/91747908/c1f8b7e4-284f-41d0-8894-2c24849e2be6' alt='axios in react'/>


قدم اول `import` کردن `axios` و تعریف کردن `baseUrl` هست . 

```javascript 
import axios from "axios";
const baseUrl = (axios.defaults.baseURL = "http://localhost:2023");

```

قدم دوم نوشتن فانکشن ها برای کار با `api` که سمت سرور نوشته شده . 

### api post functions 



#### createPost function in api

اولین فانشکن `createpost` هست 

```javscript 
export const createPost = async (data: {}) => {
  try {
  } catch (err: any) {
  }
};
```
**یاداوری** : درون هر فانکشن مروبط به کار با `api` یک `try` داریم و یک بلاک `catch` . 

**یاداوری** : تمامی فانکشن های مربوط به `api` نیاز هست که از نوع `async` و `await` باشن . 

خب یک پارامتر داریم به اسم `data` که نوع اش ابجکت هست . 

در واقع مقادیر یک `state` هست که به این فانکشن پاس داده شده . 

که در `state` مشصخات پست که قرار هست ساخته بشه قرار میگیره مثل `    content , title , cover , summery`  . 

که این موارد در یک `state` قرار میگیرند در نتیجه به به فانکشن `createPost` پاس داده میشن تا درون `api` قرار بیگرن . 

و اطلاعات وارد شده درون دیتا بیس قرار بگیره و پست ایجاد شه . 

**نکته** : کاربر حتما باید `login` باشه تا بتونه ساخت پست رو انجام بده .

فانکشن کامل `careatePost` رو ببینیم . 

```javascript 
export const createPost = async (data: {}) => {
  console.log(data, "data in create post");
  try {
    const post = await axios.post(`${baseUrl}/createpost`, data, {
      // withCredentials: true,
    });
    // console.log(response, "response");
    return post;
  } catch (err: any) {
    // console.log("Create Post Errr", err);
    return err;
  }
};
```
درون بلاگ امیدیم به وسیله `axios.post` اطلاعات مد نظر رو به `end point /createpost` ارسال کردیم . 

در نهایت اطلاعات رو `return` کردیم ریسپانسی که برشگت داده میشه اطلاعات پستی هست که ساخته شده . 

اگر هم `err` داشته باشیم در نهایت `err` رو خواهیم داشت در بلاک `catch` . 

به به وسیله `api`  که ادرس `createpost` رو داره در واقع همون `createpost  end poin` 

امدیم یک `post` رو به سرور فرستادیم و در نهایت در دیتابیس ذخیره میشه . 

#### get all posts function in api

خب حالا که `post` رو ایجاد کردیم بریم سراغ اینکه چطوری تمامی پست ها رو بگیریم . 

اینکارو به وسیله فانکشن `posts` انجام میدیم 

```javascript
export const posts = async () => {
  try {
    const response = await axios.get(`${baseUrl}/posts`);
    // console.log(response, "RESPONSE");
    return response;
  } catch (err: unknown) {
    console.log("All Posts Error", err);
    return err;
  }
};

```

صرفا تمامی پست هارو می گیریم  .

البته سمت سرور طوری این `api` نوشته شده که `response` که این `api` برگشت میده یک `author` هم درونش وجود داره . 

<img src='https://github.com/mosenn/MERN/assets/91747908/850ee6f6-4ae1-442d-8d17-06af894fcadc'
 alt='data in reactjs' />


 اگر به عکس بالا که مربوط به `response` هست که این `api` برگشت میده در واقع تمامی `post` های هستند که ساخته شده . 

 و به همراه خودشون یک `author` دارند که اشاره می کنه به کاربری که این پست رو ایجاد کرده . 

 که این موضوع سمت `server` هندل شده . 

 #### Get post with user 

 در سمت کلاینت یک `panel` کاربری داریم . 

 که کاربری که لاگین شده می تونه وارد این `panel`  شده و تمامی `post` های که خودش ایجاد کرده رو مشاهده کنه . 

 از این رو نیاز به یک `api` برای اینکار داریم که `api` سمت سرور نوشته شده که اینکارو برای ما انجام بده . 

 به وسیله این `api` یک کاربر می تونه در پنل کاربری خودش تمام پست های که توسط خوده کاربر ایجا د شده می تونه ببینه . 

 به عنوان مثال کاربر محسن امده 3 تا پست ایجاد کرده . در سایت . می تونه هر 3 پست که خودش ایجاد کرده در پنل کاربری خودش مشاهده کنه . 

 **یاداوری** : در سمت `clinet` صرفا ما از `api` نوشته شده داریم استفاده می کنم تمامی منطق این قضیه سمت `server` هندل شده .


 بریم فانشکن `userPost` رو ببینیم : 

 ```javascript 
export const userPost = async () => {
  try {
    const response = await axios.get(`${baseUrl}/userposts`);
    console.log(response, "RESPONSE");
    return response;
  } catch (err: unknown) {
    console.log("User Post Error", err);
    return err;
  }
};
```
به `api` مد نظر در خواست زده شده که `end point` در اینجا `userposts` هست . 

در نهایت `response` رو بر گشت میده که حاوی تمامی `post` های هست که کاربر حال حاضر لاگین شده ایجاد کرده . 

در بلاک `catch` هم ارور رو کنترل کردیم و اگر اروری باشه به ما برگشت داده میشه 

**نکته** : تایپ تمامی `err` ها درون بلاک `catch` می تونه `any` یا `unknown` باشه که ترجیجا از `unknown` استفاده شده . 

به وسیله این فانکشن در سمت `clinet` امدیم پست های مروبط به کاربری که `login` هست رو گرفتیم . 

که از این فانکشن در فولدر `page` در فایل `Panel.tsx` ازش استفاده می کنیم . برای گرفتن پست های مربوط به کاربر . 


#### Put edit post

فانکشن بعدی کار `update` شدن یک پست رو برای ما فراهم می کنه . 

می تونیم به وسیله این فانکشن و `api` که هست مقادیر یک پست رو `edit` کنیم . 

منتها برای این کار همونطور که قبلا اشاره شد به `id` نیاز داریم . 

در واقع به `post ObjectId` که درون دیتا هست نیاز داریم .

```javascript 
export const editPost = async (id: string, data: any) => {
};
```

خب  دو تا `parameter` داره این فانکشن . 

پارامتر اول که همون `objectId` مروبط به `post` هست که نوع تایپ اش هم `string` هست . 

پارامتر دوم در واقع یک `state` هست که حاوی اطلاعات جدید هست . 

قرار که پست رو اپدیت کنیم پس نیاز داریم اطلاعاتی رو که می خوایم داشته باشیم . 

تا بتونیم جایگزین اطلاعات قبلی کنیم . 

فانکشن `editPost` رو با هم دیگه کامل ببینیم : 

```javascritp 
export const editPost = async (id: string, data: any) => {
  console.log(id, "ID IN EDITPOST");
  console.log(data, "DATA in editpost");
  const { summery, title, content, cover } = data;
  try {
    const res = await axios.put(
      `${baseUrl}/editpost/${id}`,
      { title, content, summery, cover },
    
    );
    console.log(res, "response edit post in api");
    return res;
  } catch (err:unknown) {
    console.log("edit post err", err);
    return err;
  }
};
```

نکته ای که داره اینجا امدیم `id` که مربوط به `post` ها هم هست بهش پاس دادیم به ادرس `api` . 

که در واقع `params` ادرس `api` ما میشه و در سمت سرور می تونیم این `params` رو بگیریم که در واقع `id` پست هست . 

پستی که دست خوش تغیرر شده به وسیله همین ایدی پیدا کنیم . 

البته `api` که نوشته در سمت سرور یک `id` درون خودش داره . 

در ادامه در بلاک `try` امدیم مقادیر جدید که درون `state` ذخیره کرده بودیم به `api` پاس میدیم . 

```javasript 
  try {
    const res = await axios.put(
      `${baseUrl}/editpost/${id}`,
      { title, content, summery, cover },
    
    );
    console.log(res, "response edit post in api");
    return res;
  }
```

و `return res` رو داریم که در واقع `response` به ما `post` اپدیت شده رو برگشت میده . 

#### Delete post function 

فانکشن بعدی که از اسمش هم مشخص هست کار پاک کردن پست رو انجام میده .

و هر کاربر می تونه پستی رو که ایجاد کرده بیاد پاک کنه . 

**یاداوری** : پاک کردن و اپدیت کردن همیشه نیاز به `ObjectId` داره . 

``` javascript 
export const deleteUserPost = async (id: string) => {
  try {
    const response = await axios.delete(`${baseUrl}/deletepostuser/${id}`, {
      method: "delete",
    });
    console.log(response, "response");
    return response;
  } catch (err) {
    console.log("Delete Post Error", err);
    return err;
  }
};

```
اگر نگاه کنید دوباره به عنوان `parameter` درون ادرس `api` ایدی رو داریم که در واقع همون `ObjectId` مربوط به `post` هست . 

ریسپانسی که برگشت میده در واقع مشخصات پستی هست که پاک شده . 

در نهایت اگر `err` داشته باشیم برای پاک کردن پست در بلاک `catch` ارور مربوط رو خواهیم داشت . 

# Server 

همونطور که اشاره شد پروژه `blog` یک پروژه فول استک هست . 

بک اند پروژه با nodejs + expressjs و mongodb زده شده . 

برای اینکه بتونیم پروژه رو کامل داشته باشیم نیاز هست که فایل سرور هم در کنار فایل client داشته باشیم . 

و هر دو رو ران کنیم  . 



# Run Clinet & Server 

برای client از دستور : 

```bash
npm i 
npm run dev
```

برای server از دستور : 

```bash
npm i 
nodemon 
```

or 

```bash
node index.js
```

پکیج `nodemon` به ما کمک می کنه سرور رو به صورت `live` ران داشته باشیم . 

در واقع مثل `live server` سمت `client` می مونه . 

که حتما نیاز هست nodejs روی سیستم نصب و ورژن 16 به بالا باشه . 

برای دوسنتن ورژن nodejs کافیه `command prompet` رو باز کنید . 

دستور : 

```bash
node -v 
```

رو وارد کنید اگر nodejs نصب باشه ورژن nodejs رو نمایش میده . 

بریم سراغ ساخت سرور : 

بعد از زدن دستوارت اوله npm i . 


و ساخت package.json : 

![image](https://github.com/mosenn/MERN/assets/91747908/4645db0b-8c5b-493b-ad3b-f72bee1a6078)


اطلاعات درون package.json که درون dependencies پکیج های که برای server استفاده شده می بینیم . 
```json
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.20.2",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "dotenv": "^16.1.4",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.0",
    "mongoose": "^7.2.3",
    "yup": "^1.2.0"
  }
}
```


یک فایل به اسم index.js ایجاد می کنیم . 

<img src='https://github.com/mosenn/MERN/assets/91747908/1ca859d0-8c6c-4c54-8bb4-8af3414a1fb8' alt ='index.js in express'/>

که در واقع فایل اصلی `server` حساب  میشه . 

و تمامی module های دیگه درون index.js در نهایت import میشه . 

چون در کل یک فایل سمت server ما run میشه و اونم index.js هست . 


# Packages : 

### cors 

پکیج `cors`  در واقع cors policy رو کنترل می کنه که چه ادرسی می تونه به سرور دسترسی داشته باشه . 

همینطور یک سری option داره که می تونیم set کنیم . که جلو تر با `credentials` اشنا میشیم . 

### bcryptjs

برای رمز گذاری استفاده میشه . 

برای مثال از `bcryptjs`  برای رمزگذاری روی پسورد کاربر ازش استفاده شده . 


### body-parser 

کمک می کنه که به اطلاعات درون `body` به وسیله `req` دسترسی داشته باشیم . 

برای  `HTTP REQUSET` متد های  `post , put , patch` کمک می کنه که به `req` دسترسی داشته باشیم . 


### cookie-parser 

برای set کردن `cookie` استفاده میشه در واقع می تونیم cookie سمت سرور set کنیم و بخونیم . 

در واقع یک `middelware` هست `cookie-parser` کمک می کنه `cookie` سمت `server` خونده شه . 

و اگر نیاز بود به سمت `client` ارسال شه به صورت یک `object`
### dotenv

برای set کردن فایل env ازش استفاده می کنیم . 

### expressjs 

پکیج `expressjs` در واقع یک `framework` هست که کار رو برای کد نویسی `server` فراهم می کنه . 

### jsonwebtoken 

پکیج `jsonwebtoken` برای ساخت `token` ازش استفاده میشه . 

که `token` ساخته شده می تونه حاوی یک سری اطلاعات باشه . 

برای `Authentication` و `Authorization` ازش استفاده میشه .


### mongoose 


پکیج `mongoose` به ما کمک می کنه تا بهتر بتونیم با `mongodb` ارتباط بگیریم و ازش استفاده کنیم .


### yup 

پکیج `yup`  برای اعتبار سنجی سمت `server` می تونیم ازش استفاده کنیم . 

برای `validation` کردن اطلاعاتی که قرار هست ارسال شه سمت `data base` . 


بعد از اینکه پکیج های مورد نیاز رو نصب شد . 

اگر که پروژه رو `clone` کنید با دستور `npm i` می تونید تمامی پکیج ها رو نصب کنید . 

نوبت به ساخت و ایجاد `server` می رسه . 

# Create Server


# Index.js File

درون فایل `index.js` اول میایم پکیج های موزد نیاز رو `require`  می کنیم . 

**نکته** : در این پروژه از `commonjs` استفاد هشده به جای `es6` 


```javascript
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const connectToDb = require("./connection/db");
require("dotenv").config({ path: "./config.env" });
```

بعضی از پکیج ها رو می بنید که require شده درون فایل index.js . 

پکیج های که نیستند در module دیگه ای ازشون استفاده شده . 


**نکته** : هر فایل js در واقع یک module هست . 

یک متفیر `connectToDb` داریم که در واقع کار متصل شدن به پایگاه داده رو برای ما انجام میده . 
```javascript
const connectToDb = require("./connection/db");
```

که در اینده توضیح داده میشه نحوه اتصال به `data base`

در این پروژه از `mongodb atlas` استفاده شده . 

که `mongodb atlas` در واقع یک `data base` انلاین `mongodb` هستش . 

و بدون نصب `mongodb` روی سیستم می تونیم از `mongodb atlas` استفاده کنیم . 

 که البته نیاز داریم که حتما درونش یک اکانت ایجاد کنیم و مراحل ساخت `data base` رو انجام بدیم . 


مورد بعدی که کمی با بقیه متفاوت هست `dotEnv` هست . 

```javascript
require("dotenv").config({ path: "./config.env" });
```

که این `dotenv` برای خوندن فایل `env`   استفاده میشه   

نیاز به تعریف کردن متغییر نداره به `path` میایم ادرس فایل env خودمون رو وارد می کنیم . 

که در اینجا اسم فایل ما `config.env` هست و درون `path` به این شکل تعریف شده `{ path: "./config.env" }` به ابجکت بودنش دقت کنید .


### Define app

بعد از import ها که تموم شد . میایم به وسیله `expressjs` یک app تعریف می کنیم . 


```javascript 
const app = express();
```

الان می تونیم از `express` استفاده کنیم . 


### middelware use 

قدم بعدی استفاده از `use` هست , یک متد درونی `express` هست که به عنوان یک `middelware` عمل می کنه . 

 اجازه میده که بتونیم از HTTP METHOD ها استفاده کنیم به وسیله `express` 

در واقع هر جا نیاز داریم که به `server` بگیم یک سری چیز ها رو استفاده کن . 

از `use` استفاده می کنیم . 

```nodejs 
app.use(bodyParser.json());
app.use(cookieParser());
```


در کد بالا امدیم از `parser` ها استفاده کردیم که توضیح شون رو کمی بالا تر گفتیم . 



### Saving Image In Server 

اگر بخوایم عکسی رو درون server ذخیره کنیم . که نخوایم از یک فضای دیگه برای ذخیره سازی عکس استفاده کنیم . 

و بخوایم درون خوده سرور اینکارو انجام بدیم که پیشنهاد نمیشه . 

به دلیل اینکه حجم دیتا بیس و سرور افزایش پیدا می کنه . اما به هر حال نیاز هست 

که از پکیج `multer` استفاده کنیم و همینطور کد های زیر رو درون `index.js` داشته باشیم . 

```javascript
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
```

در واقع برای فایل های `json` که سمت سرور میاد یک `limit` تعیین شده . 

و همینطور برای `urlencoded` که به سمت سرور ارسال میشه باز یک `limit` تعریف شده . 

در نهایت از `multer` استفاده میشه برای ذخیره سازی و ارسال عکس به سمت `data base` . 

**یاداوری** : در این پروژه ما از یک فضای `cloud` سمت `client` استفاده کردیم . 

از سایت `cloudinary` , که عکس فرستاده شده از کاربر رو `upload` می کنه . 

یک لینک اپلود عکس برای ما به عنوان ریسپانس میده 

و `link` ارسال شده که `response api` هست رو درون `data base` دخیره می کنیم . 

**یاداوری** : تمامی مراحل گفته شده برای اپلود عکس سمت  `client` انجام شده . 


بریم سراغ ادامه فایل `index.js` . 

```nodejs 
app.use(bodyParser.json());
app.use(cookieParser());
```

### define cors 

قدم بعدی تعریف کردن `cors` هست . 

که در واقع ادرس های که قرار هست به این server دسترسی داشته باشند . 

مر بوط به `cors policy` که می تونیم یک یا چند دسترسی اعمال کنیم . 

البته برای اینکه بتونیم با `cookie` کار کنیم نیاز هست `credentials` رو روی `true` قرار بدیم . 

که یک option مر بوط به `cors` هست . 

```javascript 
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
```

از `use` استفاده کردیم که توضیح دادیم یک `method` درونی `express` هست . 

از `use` به مکرر استفاده میشه . 

### listen 

مر حله بعدی نوشتن `listen` هست برای اینکه `server` که ایجاد کردیم روی یک port و یک ادرس بیاد `run` شه . 

**نکته** : حتما باید این `listen` تعریف شه حتی اگر می خوایم `server` رو بعدا روی `host` دیپلوی کنیم . 

اگر این کارو انجام ندیم وقتی که `deploy` انجام میشه روی `host` پورت دیفالت اون `host` رو نمی تونه بخونه . 

در نهایت `server` مد نظر ما به طور کامل `deploy` نمیشه .


```javascript
const port = process.env.PORT || 3010;
app.listen(port, () => {
  console.log(`server is connectin http://localhost:${port}`);
});
```

در اینجا `port` که تعریف شده به صورت `default` گذاشتیم روی 3010 و در نهایت یک متغییر `env` تعریف کردیم . 

که اگر `port` دیفالت که 3010 هست اجرا نشد بره از داخل   متغییر `env`  پورت رو بخونه . 

و موقع `deploy` کردن روی `host` این متغییر رو برای host تعریف می کنیم و host پورت خودش رو اعمال می کنه . 


### run server 

خب حالا اگر با دستور `node index.js` رو بزنیم `server`  اجرا میشه . 

همینطور با اگر دستور `nodemon` رو بزنیم درون `terminal` باز سرور ران میشه . 

پیشنهاد میشه با `nodemon` ران شه به صورت `live` تغییرات رو ببنید . 

که قبل تر گفتیم نیاز هست `nodemon` رو نصب کنید .

### define test route 

برای اینکه متوجه شیم server روی لوکال به درستی run میشه یا نه . 

یک `route` تست تعریف می کنیم تا درون صحفه یک چیزی رو به ما نمایش بده یک پیام ساده .

**نکته** : این `route` ساده که می نویسیم بعد از تست می تونیم کامنت کنیم یا پاک کنیم . 

```javascript 
app.use("/home", async (req, res) => {
  res.status(200).send("server is ok");
});
```

در واقع هر `ROUTE` که نوشته میشه `parameter` های `req` , `res` رو خواهد داشت . 

که با `res` در خواست ها رو به ادرسی که نوشته شده ارسال میشه . 

با `req` می تونیم در خواست های سمت `client` یا `cookie` و .. بگیریم . 

در کد بالا یک پیام حاوی `server is ok` در صحفه اصلی server چاپ کردیم . 

متد `res` درون خودش `status` کد رو داره که با این `status` ها رو ست می کنیم . 

که هر `status code` بیانگر یک پیام هست . 

مثلا `201 status code`  به معنی ساخته شدن هست . 
یا `status 200` به معنی موفقیت امیز بودن هست . 

مثلا `status code 404` به این معنی `bad requset` در خواست بد هست .

می تونیم از `send` یا `json` برای ارسال استفاده کنیم . 

که `json` پیشنهاد میشه . 

# Connect to mongodb 

بعد از ساخت اکانت در mongodb atlas که data base انلاین ما هستش . 

یک ادرس برای متصل شدن ایجاد میشه که به وسیله این ادرس میایم server خودمون رو به `mongodb atlas` متصل می کنیم . 

یک فولدر به اسم `connection` داریم که فایل درونی اون به اسم `db.js`  کار متصل شدن به `data base` رو انحام میده . 

![image](https://github.com/mosenn/MERN/assets/91747908/a91a0d7a-97e8-4b08-91a8-3985ab7c32d3)

درون `db.js` کد زیر رو داریم : 

```javascript
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connecetToDb = async () => {
  try {
    const connect = await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.zutazhf.mongodb.net/blog`
    );

    console.log(`db is connect at ${connect.connection.host}`);
  } catch (err) {
    console.log(err, "data base cant connect");
    process.exit(1);
  }
};

module.exports = connecetToDb;
```
 نکته ای که وجود داره گفتیم از `mongoose` استفاده می کنیم برای ارتباط گرفتن و کار با `mongodb` . 

 برای connect شدن و ا ستفاده از متد های `mongodb` نیاز هست که از async , await استفاده کنیم . 

ّبه این دلیل که `promise base` هستند . 

فانکشن `connecetToDb` از نوع async هست و درون بلاک `try` امدیم از `await` استفاده کردیم . 

که بتونیم `connect` شیم به `data base` خودمون . 



--- بعد از `mongodb.net` که در ادرس دیتا بیس ما هست یک / می زنیم و اسم `data base` خودمون رو وارد می کنیم . 

که در ادرس زیر اسم `data base` مد نظر ما `blog` هست .

```javascript 
  try {
    const connect = await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.zutazhf.mongodb.net/blog`
    );

    console.log(`db is connect at ${connect.connection.host}`);
  } catch (err) {
    console.log(err, "data base cant connect");
    process.exit(1);
  }
```

درون بلاک `catch` امدیم error مربوط به `connect` شدن رو هندل کردیم . 

که اگر `data base` ما به مشکل خورد و متصل نشد یک `error` داشته باشیم متوجه شیم که مشکل سمت `connect` شدن هست . 

در نهایت فانکشن خودمون رو `export` کردیم و می خوایم از این فانکشن بیام درون `index.js` استفاده کنیم . 

```javascript
module.exports = connecetToDb; 
```

به این دلیل که فقط `index.js` اجرا خواهد شد و تمامی اجزای `server` که ما می نویسیم . 

به طور مستقیم یا غیر مستقیم درون `index.js` قرار میگیره تا `module` مد نظرمون اجرا شه  . 

**یاداوری** : هر فایل `javascript` در واقع یک `module` هستش . 

به `index.js` میریم و `connectToDb` که `export` کردیم میام اول `require` می کنیم و بعد صداش می زنیم . 

```javascript 
const connectToDb = require("./connection/db");
```

و بالا تر از `listen` که نوشتیم صداش می زنیم همینطور بالا تر از `routet test` که ایجاد کردیم . 

```javascript 
connectToDb();
```

**نکته** : در واقع زمانی که سمت `server` میایم با `nodejs` کد می زنیم ترتیب یه جاهای مهمه . 

و اگر این ترتیب بندی بعضی از جاها رعایت نشه ممکنه سرور ما به مشکل بخوره و ران نشه . 


# Server Folders 

![image](https://github.com/mosenn/MERN/assets/91747908/eed7828c-8eee-43b1-b0df-a02fe7509e52)



فولدر های سمت `server` رو معرفی کنیم . 

### model folder 

![image](https://github.com/mosenn/MERN/assets/91747908/4ea96d1c-3a41-4bdd-af20-f1555a63519d)


که یدونه `model` داریم که برای ایجاد `schema` هست که بتونیم با `data base` ارتباط بگیریم . 

در واقع هر `collection` که می خوایم برای `data base` ایجاد کنیم نیاز به یک `schema` و `model`  داریم . 

که در فولدر model برا مثال یک فایل به اسم `user.js` داریم برای ایجاد `model` کاربرانی که در سایت ما هستند . 

### user.js 


اگر بخوایم فایل user.js رو بررسی کنیم به طور کلی نوع دیتای که قرار برای هر کاربر ذخیره شه رو مشخص کردیم . 

بعد به وسیله یک `middelware` که خودمون نوشتیم و ایجاد کردیم کار `validation` رو انجام دادیم . 

و همینطور از `bcrypt` استفاده کردیم برای رمز گذاری پسورد ها . 

در واقع قبل از اینکه دیتای مربوط به `user` ها ثبت شه اول `valid` شده . 

**نکته** : این کار تکراری هست و برای هر پروژه می تونیم انجام ا ش بدیم . 


یه نگاهی به کل کد های مربوط به فایل `user.js` بندازیم : 

اول مواردی که نیاز داریم رو `require`  می کنیم . 

که 2 تا از این موارد مربوط به رمز گذاری پسورد و ولیدیشن هست که بهشون می رسیم  جلو تر . 

```javascript 
const { hash } = require("../middleware/bcrypt");
const mongoose = require("mongoose");
const userRegisterValid = require("../middleware/userValidation");
```

همینطور به `mongoose` نیاز داریم برای ساخت `schema` . 

**یاداوری** : هر `data` که قرار درون `data base` ذخیره شه نیاز به یک `schema` و `model`  داره . 


قدم بعدی ساخت `schema` هست به وسیله `mongoose` : 

```javascript 
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  password: {
    require: true,
    type: String,
  },
  confirmPassword: {
    require: true,
    type: String,
  },
  pic: {
    type: String,
  },
});
```

که نوع type و اینکه اون اطلاعات که داره ارسال میشه نیاز هست `required`  هست  .  

مواردی که `required` قرار داده شده وجود داشتن شون الزامی هست . 


خب می تونیم الان `model` خودمون رو ایجاد کنیم و اسم collection که می خوایم این data درونش ذخیره شه رو اعمال کنیم . 

منتها قبل از اینکه کار ذخیره شدن انجام شه میایم نوع `valid` شدن رو چک می کنیم . 

به وسیله خوده `schema` که ایجاد کردیم 

```javascript 
userSchema.statics
```
**نکته** : مهمه که اخر static یه `s` باشه در غیر اینصورت به مشکل می خوریم . 

در ادامه فانکشنی که برای `validation` نوشتیم و کار `valid` کردن رو انجام میده میایم استفاده می کنیم . 

قبل تر `requiire` کرده بودیم . 


```javascript 
const userRegisterValid = require("../middleware/userValidation");
```

```javascript 
userSchema.statics.userRegisterValid = (reqBody) => {
  return userRegisterValid.validate(reqBody, { abortEarly: false });
};
```
پارامتر `reqBody`  در واقع `req` های هستند که موقع ارسال شدن درون `body` قرار می گیرند . 

و هر `route` یا `controller` این موارد رو داره . که به این فانکشن پاس داده میشه . 

در نهایت درون فانکشن داریم `return` می کنیم `userRegisterValid` که بیاد `validate`  کنه . 

منتها پارامتر `reqBody` رو بهش پاس دادیم در ادامه `option abtortEraly:false` گذاشتیم . 

که اگر `error` وجود داشت بیاد به صورت دسته جمی اون `error` هارو نشون بده نه تک تک . 


### has passowrd 

بعد از validtion رمزگذاری کردن password ها رو داریم که به وسیله `package bcryptjs` انجام میشه .  

که قبل از اینکه بخوایم `model` رو ذخیره کنیم میایم password کاربر های که ثبت نام می کنند . 

رو برای امنیت بیشتر رمز گذاری می کنیم و درون `data base` ذخیره می کنیم . 

برای این کار از `schema` که ساختیم استفاده می کنیم و در ادامه یک فانکشن ایجاد می کنیم . 

```javascript
userSchema.pre("save", async function (next) {

});
```
این فانکشن نیاز هست که از نوع فانکشن معمولی باشه در واقع arrow function نباشه . 

به این دلیل که می خوایم از `keyword this`  استفاده کنیم . 

گفتیم   `userSchema.pre` که در واقع `pre` به این معنی که قبل از اینکه در ادامه `save` رو داریم که یک `string` هست . 

معنی فانکشنی که نوشتیم اینه : قبل از اینکه `userSchema` که ساختیم بیاد `save` شه . 

یک کاری انجام بده بعدش بیاد `save` شه . 

کاری که می خوایم انجام بدیم درون فانکشن انجام میشه . 

```javascript
userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }

});
```

در قدم اول میایم چک می کنیم به وسیله `if` اگر که `userSchema` ما به هر دلیلی وجود نداشت فانکشن `next` اتفاق بیوفته . 

در واقع `this.isModified` میاد چک می کنه که `userSchema` ما اگر مشکلی نداشت همه چی اوکی بود بره ادامه فانکشن . 

اما اگر مشکلی بود بره روی `error` ها و `error` ها رو نشون بده.

در ادامه فانکشن  `password` , `confrimPassword`  رو قبل از اینکه در `data base` ذخیره شن رمزگذاری می کنیم . 


```javascript 
userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }
  //*new update for hasing most be get this in model

  const { hashPassword, hashConfirmPassword } = await hash(
    this.password,
    this.confirmPassword
  );
  this.password = hashPassword;
  this.confirmPassword = hashConfirmPassword;
});
```
**نکته** : ممکنه در اول کار به این صورت کد کار نکنه که به صورت `middelware` امدیم `hash` کردیم . 

در واقع اتفاق رمز گذرای درون یک فانکشن که درون فولدر `middelware` هست داره اتفاق می افته . 

اگر که اول کار مشکلی پیش امد با این روش `hash` کردن به وسیله `midelware` تمامی عملیات `hash` کردن رو 

همینجا انجام میدیم بدون `middelware` اما بعد از چند باز که مشکلی نبود می تونیم باز تبدیل اش کنیم به یک فانکشن جدا . 

خب `hash`  در واقع یک فانکشن هست که `require`  شده در یک فایل جدا داره یک سری عملیات مربوط به رمزگذری رو انجام میده . 

```javascript 
const { hash } = require("../middleware/bcrypt");
```

حالا ازش درون فانکشن که تعریف کردیم استفاده می کنیم 

```javascript 
userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }
  //*new update for hasing most be get this in model

  const { hashPassword, hashConfirmPassword } = await hash(
    this.password,
    this.confirmPassword
  );
  this.password = hashPassword;
  this.confirmPassword = hashConfirmPassword;
});
```
درون فانکشن `this.password` , `this.confrimPassword`  به `userSchema` که ساختیم اشاره می کنند . 

و `hashPassword` , `hashConfirmPassword`  در واقع پسورد کاربر هستند که از `req`  گرفته شده و رمزگذاری شده . 

در نهایت `password` های که درون `schema` هست با پسورد های که `hash`  شده `assignment` میشه

### create model connect to collection 

در نهایت نوبت به ساخت `model` میشه و یک اسم برای `collection` دیتا بیس تعریف می کنیم . 

که این `schema` درون `collection data base` ساخته میشه . 

```javascript
const userModel = mongoose.model("users", userSchema);

module.exports = userModel;

``` 

میایم `model`  رو درون یک متغییر قرار میدیم و `export` می کنیم . 

به وسیله `mongoose.model` میایم مدل خودمون رو ایجاد می کنیم . 

که `users` میشه اسم `collection` که داشتیم . 

و `userSchema` در واقع `schema` هست که ساختیم 

و  `userSchema` درون `collection users` در `mongodb atals` ذخیره میشه .

بعدا زمانی که  `controller` رو تعریف کردیم از این userModel استفاده می کنیم . 
# Midelware Folder 

![image](https://github.com/mosenn/MERN/assets/91747908/3ccd86f8-8e02-4271-8527-8b9ee86c1d14)


یک فولدر در پروژه داریم به اسم `midelware`  که فانکشن های که ممکنه زیاد استفاده شه . 

درون این فولدر تعریف می شه . 

مثل hash کردن یا ولیدیشن و ... . 

بریم اول `hash` رو بررسی کنیم که کمی بالا تر ازش استفاده کردیم برای رمزگذاری پسورد ها . 

درون فایل `bcrypt.js` امدیم عملیات `hash` وهمینطور `compare` استفاده کردیم . 

زمانی که passowrd درون `data base` ذخیره میشه به صورت رمزگذاری هست چون خودمون `hash` کردیم . 

و زمانی که بخوایم مثلا برای لاگین شدن همون password رمزگذاری شده رو با پسوردی که کاربر برای لاگین شدن وارد می کنه 

مقایسه کنیم نیاز داریم که `compare` کنیم تا این مقایسه به درستی انجام شه . 

اول پکیج `bcryptjs` رو میایم `require` کنیم 

```javascript 
const bcrypt = require("bcryptjs");
```

قدم بعدی نوشتن فانکشن `hash`  هست . 

```javascript
const hash = async (password, ConfirmPassword) => {

}; 
```

به این دلیل که `bcryptjs` متد های درونش `promise base` هستند نیاز هست از `async / await`  استفاده کنیم 

فانکشن `hash`  از نوع `async`  هست که 2 تا `parameter` می گیره در واقع پسورد های که کاربر وارد کرده. 

از `controller` که نوشته شده و متصل به یک `route` هست و `client`  اطلاعات مروبط به کاربر به `route` تعریف شده ارسال میشه . 


 در ادامه یک `if` تعریف میشه که چک می کنه ببینه `password` هست یا نه اگر بود بیاد پسورد رو به وسیله `bcryptjs` رمزگذار می کنیم . 


 ```javascript 
const hash = async (password, ConfirmPassword) => {
  if (password) {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const hashConfirmPassword = await bcrypt.hash(ConfirmPassword, salt);
    return {
      hashPassword,
      hashConfirmPassword,
    };
  }
};
```

درون `if` اول یک `salt` ایجاد می کنیم که یک `string` رندم ایجاد می کنه که گفتیم تا 10 `character` اینکارو انجام بده . 

در نهایت `pasword` , `confirmPassword`  رو گفتیم که بیاد به وسیله  `bcrypt.hash`  که داریم از پکیج `bcryptjs` استفاده کردیم .

و `hash` یک متد درونی `bcryptjs` هست .  

و الان به جای پسورد که کاربر وارد کرده یک `string` داریم با 10 کاراکتر 

و هر دو متغییر `hashPassword` , `hashConfirmPassword`  رو return کردیم  . 

که در نهایت در [model user.js](#has-passowrd) ازش استفاده کردیم .

فانکشن بعدی کار `compare`  کردن رو انجام میده در واقع مفدار رمز گذاری شده درون `data base` رو 

با وردی که کاربر وارد می کنه مقایسه می کنه .  در `controller` مربوط به `login` کاربر ازش استفاده می کنیم 

```javascript 
const compare = async (reqPassowrd, dbPassword) => {
  return await bcrypt.compare(reqPassowrd, dbPassword);
};
```

در نهایت هر دو فانکشن که درون فولدر `midelware` درون فایل `bcrypt.js` هستند رو `export` می کنیم . 

که بتونیم در فایل های دیگه به اونها دسترسی داشته باشیم و ازشون استفاده کنیم . 

```javascript
module.exports = {
  hash,
  compare,
};

```

# Validation Middleware 

درون فولدر `Middleware` یک فایل داریم به اسم `userValidation` که مسئول `valid` کردن اطلاعات دریافتی هستش . 

که درون [model user.js](#model-folder) ازش استفاده کردیم همراه با `statics` قبل از اینکه model رو بسازیم . 

ولیدیشن رو به وسیله  پکیج [yup](#yup) انجام شده . 

یک فایل به اسم `userValidation` درون فولدر `middleware` داریم . 

![image](https://github.com/mosenn/MERN/assets/91747908/1e3c7bf0-38f6-495b-bb67-86bdd96e0586)

درون `userValidation` میایم `yup` رو `require` می کنیم . 

```javascript
const yup = require("yup");
```

قدم بعدی یک متغییر تعریف می کنیم و یک `shape` به وسیله `yup` ایجاد می کنیم . 

```javascript 
const userRegisterValid = yup.object().shape({
});
```
 میایم به وسیله متد های درون `yup` ولیدیشن رو برای `userSchema` انجام میدیم . 

 **نکته** : هر بار که بخوایم یک `schema` رو به وسیله `yup` ولیدیشن کنیم . از همین روش استفاده می کنیم .

 در ادامه میایم `key` های که درون `userSchema` داریم تعریف می کنیم . نوع `type` شون رو مشخص می کنیم . 

 و به وسیله متد های `yup` و `regex` ولیدیشن رو انجام میدیم . 

 
```javascript 
const userRegisterValid = yup.object().shape({
    username: yup.string().trim().required().min(3, "username character +3 "),
});
```

خب اینجا `username` رو داریم که به وسیله `yup` ولیدیشن شده . 

در واقع `shape` که ایجاد کردیم یک `object` هست . 

در ادامه `()username:yup.string` به منظور `string` بودنه . 

از `()trimt` برای از بین بردن فاصله ها استفاده کردیم . 

از `()required` به این معنی که حتما `username` باید وجود داشته باشه . 

از `min` برا مشخص کردن تعداد `charcater` استفاده کردیم . 

در اخر یک `string` برای نشون دادن پیام مربوط به `error` گذاشتیم . 

بقیه موارد هم به همین صورت هست  و برای `password` از `regex` استفاده کردیم . 

که یدونه `hard password` داشته باشیم برای ثبت نام کاربر . 

اگر `email` هم داشتیم می تونیم از  `regex` استفاده کنیم . 

در کل هر جای که نیاز باشه می تونیم از `regex` در `yup` استفاده کنیم . 

کل `userValidation`  به صورت زیر هستش : 

```javascript
const yup = require("yup");
const userRegisterValid = yup.object().shape({
  username: yup.string().trim().required().min(3, "username character +3 "),
  password: yup
    .string()
    .trim()
    .required("pasword 8 charcter a-A-2-@")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "pasword 8 charcter a-A-2-@"
    )
    .min(8),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "passwords is not match")
    .trim()
    .min(8, "passwords is not match"),
  pic: yup.string(),
});
```
در قسمت `password` از `regex` و متد `match` استفاده شده . 

در قسمت `confirmPassword` از `oneOf` استاده کردیم که `ref` زده شده به `password` . 

در واقع `onOf` و `ref` میاد `confrimPassowrd` رو چک می کنه که دقیقا عین خوده `password` باشه . 

در اخر میایم `shape yup` که ایجاد کردیم رو `export` می کنیم . 

```javascript 
module.exports = userRegisterValid;
```

که درون [model user.js](#model-folder) ازش استفاده کرده بودیم قبل از اینکه `schema` درون `data base` ذخیره شه . 

# Controller Folder 

![image](https://github.com/mosenn/MERN/assets/91747908/491c7e3e-9c88-4fb0-ba35-172ce60b4aa7)

**نکته** : از `mvc` استفاده می کنیم . که مخفف `model view controller` هست . 

که تا به اینجا با `model` اشنا شدیم . 

و `view` این پروژه به وسیله `reactjs` هندل میشه و فایل `view` درون `server` نداریم . 

که می تونیم `view` رو داشته باشیم در سمت `server` 

در مورد `controller` هم در همین بخش می خوایم در موردش صحبت کنیم . 

خب یک فولدر داریم به اسم `controller` که درون این فولدر فایل های مربوط به `controller route`  ها قرار داره . 

در واقع هر api یک `route` داره و هر `route` یک `controller` . 

در واقع `route` ها همون ادرس api هستند که می تونیم ازشون `response` بگیریم یا چیزی رو ارسال کنیم به وسیله متد `post`

و `controller` ها فانکشن های هستند که میان برای `route` ها تعریف میشن . که یک سری شرط شاید گذاشته شه . 

در کل درونشون یک سری عملیات اتفاق می افته و `error` ها کنترل میشه . 

در نهایت اطلاعات  رو به `route` مورد نظر ارسال می کنه و `clinet` می تونه `response` رو ببینه . 

## user.js controller 

درون فایل `user.js`  کار های مربوط به کاربران انجام میشه . 

مثل `register` , `login` و ...  

اول ببنیم درون فایل `user.js چه چیزای `require` شده 

```javascript 
const { compare } = require("../middleware/bcrypt");
const userModel = require("../model/user");
const jwt = require("jsonwebtoken");
```

 اینجا از `compare` برای مقایسه کردن  پسوردی که کاربر برای لاگین وارد می کنه . 

و پسوردی که درون `data base` هست استفاده می کنیم . 

در ادامه به `userModel` نیاز داریم در واقع  [model](#model-folder)` هست که برای `user` ها ایجاد کردیم . 

در ادامه `jwt` رو داریم که امدیم برای ارسال و ست کردن `token` ازش استفاده می کنیم . 

که درون فانکشن `loginUser` و `profileUser` ازش استفاده شده . 

**یاداوری** : `controller` ها در اصل همگی `function` هستند 

**نکته** : تمامی `controller` ها فانکشن های از نوع `async` هستند 

به این دلیل که  برای کار با `data base` نیاز هست که از `await , async` استفاده کنیم . 

اگر استفاده نشه توی ارسال `data` یا ذخیره کردن در `data base` به مشکل می خوریم . 


### registerUser Controller 

همنوطر کفه گفته شد تمامی `controller` ها یک فانکشن هستند . 

که از نوع `async` هستند . 

```javascript
const registerUser = async (req, res) => {
};
```

در فانکشن `registerUser` میایم عملیات ثبت نام کاربر رو انجام میدیم 

 به `route` و `api` مد نظر مربوط برای ثبت نام ارسال می کنیم .

 در هر `controller` که برای یاداوری یک فانکشن هستند از `try / catch` استفاده می کنیم . 

 ```javascript 
const registerUser = async (req, res) => {
  try {
  } catch (err) {
  }
};
```
هر `controller` رو میایم `export` می کنیم چون می خوایم درون `routes` استفاده کنیم .

```javascript 
module.exports = {
  registerUser,
};
```
در هر `controller`  دو تا `parameter` داریم به اسم `req` , `res` .

که `req` , `res` از  `route`  میان .

یک فولدر به اسم `routes` داریم که در واقع ادرس api ها رو اونجا تعریف کردیم . 

![image](https://github.com/mosenn/MERN/assets/91747908/4f134f0e-fc2d-4295-8cd6-9da7bc8c7fc1)


و   `clinet` این ادرس api ها رو میگیره که در نهایت اگر همه چی خوب پیش بره یک `response` خواهد داشت  . 

که کمی جلوتر فولدر `route` رو توضیح میدیم . 

بر گردیم به `registerUser` فانکشن 

```javascript 
const registerUser = async (req, res) => {
  const errors = {};
  const { username, confirmPassword, password, pic } = req.body;
  try {
  } catch (err) {
  }
};
```

یک متغییر ابجکت به اسم `errors` بیرون از بلاک `try` داریم .

به این دلیل که `message` مربوط به `yup` مربوط به اینکه `username` کاربر وجود داره در `data base` یا نه رو نداریم . 

به همین دلیل این `error` و چک کردن رو به وسیله یک `if` انجام میدیم و `message error` شو درون `errors` ذخیره می کنیم .

در ادامه یک `descracher` داریم که مقادیر که `clinet` در `body` می فرسته رو گرفتیم . 

در واقع `form` که برای `register` شدن کاربر در سمت `clinet` هست یک سری `input` داره . 

که مقادیر اون ارسال میشه به `api` مربوط به `register`




```javascript
  const { username, confirmPassword, password, pic } = req.body;
```

در بلاک `try` ولیدیشنی که به وسیله `yup` ایجاد کردیم داریم .

```javascript

const registerUser = async (req, res) => {
  const errors = {};
  const { username, confirmPassword, password, pic } = req.body;
  try {
    //* validation
    await userModel.userRegisterValid(req.body);

  } catch (err) {
};
```

در ادامه میایم به وسیله متده `findeOne` چک می کنیم کاربری که در حال ثبت نام هست قبلا ثبت نام کرده ؟ 

اگر قبلا شخصی با اکانت وارد شده درون `data base` وجود داشت  بود یک پیام به عنوان `error` ارسال می کنیم .

```javascript
const registerUser = async (req, res) => {
  const errors = {};
  const { username, confirmPassword, password, pic } = req.body;
  try {
    //* validation
    await userModel.userRegisterValid(req.body);
      const foundUser = await userModel.findOne({ username });
  } catch (err) {
};
```

یک متفییر به اسم `foundUser` تعریف کردیم و درون `data base` داریم `username` که کاربر وارد کرده برای ثبت نام چک می کنیم . 

ببینیم ایا واقعا این `user` درون `data base` هست یا نه . 

در ادامه یک `if` داریم . 


```javascript
const registerUser = async (req, res) => {
  const errors = {};
  const { username, confirmPassword, password, pic } = req.body;
  try {
    //* validation
    await userModel.userRegisterValid(req.body);
      const foundUser = await userModel.findOne({ username });
        if (foundUser) {
      errors.username = "this user before register";
          
    }
  } catch (err) {
};
```

در `if` گفتیم اگر `foundUser` بود بیاد یک پیام مبنی بر اینکه این کاربر قبلا ثبت نام کرده ایجاد شه . 

و در ابجکت `errors` ذخیره شه . 

در ادامه ساخت ذخیره سازی اکانت رو داریم در `data base` . 

```javascript
const registerUser = async (req, res) => {
  const errors = {};
  const { username, confirmPassword, password, pic } = req.body;
  try {
    //* validation
    await userModel.userRegisterValid(req.body);
      const foundUser = await userModel.findOne({ username });
        if (foundUser) {
      errors.username = "this user before register"; 
    }
   const users = await userModel.create({
      username,
      password,
      confirmPassword,
      pic,
    });
  } catch (err) {
};
```

در ادامه متد `create` رو داریم که برای ساخت یک `document`  هر کاربری که ثبت نام رو انجام میده . 

یک `document` ایجاد میشه درون `collection user` که در واقع `model` هست که ایجاد کردیم . 

در ادامه `users` رو به عنوان `response` ارسال شده . 

```javascript
const registerUser = async (req, res) => {
  const errors = {};
  const { username, confirmPassword, password, pic } = req.body;
  try {
    //* validation
    await userModel.userRegisterValid(req.body);
      const foundUser = await userModel.findOne({ username });
        if (foundUser) {
      errors.username = "this user before register"; 
    }
   const users = await userModel.create({
      username,
      password,
      confirmPassword,
      pic,
    });
    return res.status(201).json(users);
  } catch (err) {
};
```

که از `status code 201` استفاده شده . 

```javascript 
    return res.status(201).json(users);
```

بریم سراغ بلاک `catch` که `error` ها هندل میشه . 

که اگر مشکلی در `register` پیش امد `error` ها و پیام های مروبط به `validation` سمت `client` ارسال میشه .

```javascript
const registerUser = async (req, res) => {
  const errors = {};
  const { username, confirmPassword, password, pic } = req.body;
  try {
    //* validation
    await userModel.userRegisterValid(req.body);
      const foundUser = await userModel.findOne({ username });
        if (foundUser) {
      errors.username = "this user before register"; 
    }
   const users = await userModel.create({
      username,
      password,
      confirmPassword,
      pic,
    });
    return res.status(201).json(users);
  } catch (err) {
    err?.inner?.forEach((e) => {
      errors[e.path] = e.message;
    });
    return res.status(400).json(errors);
};
```
که `err.inner`  در صورتی که وجود داشت ` ? ` یک `forEach` روش زده میشه و تمامی `message` ها ارسال میشه . 

و در نهایت یک `404 status code` ارسال می کنیم مبنی بر اینکه خطای وجود داره .

و درون یک `json` هر انچه درون `errors` داریم ارسال می کنیم .


### LoginUser Controller 

در فانکشن `loginUser` میایم لاگین شدن کاربر رو کنترل می کنیم . 

و اگر کاربر `login` شد  یک `token` حاوی اطلاعات کاربر درون `cookie` ذخیره می شه .


```javascript 
const loginUser = async (req, res) => {
};
```

کاربری که ثبت نام کرده در می تونه به وسیله `username` و `password` لاگین کنه . 

که در اینجا چک کردن اینکه کاربر `username` , `password` رو درست وارد کرده رو چک می کنیم . 

در قدم اول `username` و `password` رو از `req` می گیریم . 
```javascript 
const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userModel.findOne({ username });


  } catch (err) {

  }
```
بعد از اینکه `username` و `password` رو گرفتیم از `req.body` میایم چک می کنیم که پسورد وارد شده درست باشه . 

در واقعه با پسوردی که کاربر ثبت نام کرده یکی باشه . 

اینجا میایم از `compare` استفاده می کنیم که در بخش `middelware` توضیح شو داده بودیم .

```javascript 
const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userModel.findOne({ username });
    const passowrdIsOky = await compare(password, user.password);
  } catch (err) {

  }
```
 
که نیاز هست `password` که از سمت `clinet` درون `req.body` داریم و پسوردی که به وسیله `findOne` از `data base` میگیریم رو به `compare` پاس بدیم . 

که `compare` میاد پسورد ها رو مقایسه می کنه . 

که `compare`  یک `boolean` برگشت میده یا `false` یا `true` . 

در نهایت درون `if` گفتیم اگر `passwordIsOky` بود . در واقع اگر `true` بود . 

```javascript 
const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userModel.findOne({ username });
    const passowrdIsOky = await compare(password, user.password);
    if (passowrdIsOky) {}
  } catch (err) {

  }
```
درون این `if` میایم یک `token` رو `sign` می کنیم . 

درون `token` اطلاعاتی رو که می خوایم ارسال می کنیم . 

که ایجاد کردن `token` به وسیله `jsonwebtoken` انجام میشه . 



```javascript 
const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userModel.findOne({ username });
    const passowrdIsOky = await compare(password, user.password);
    if (passowrdIsOky) {
  const userToken = await jwt.sign(
        {
          id: user._id,
          username: user.username,
          pic: user.pic,
        },
        process.env.JWT_SECRET,
        {}
      );

}
  } catch (err) {

  }
```

این `token` رو درون `cookie` سمت `server` ذخیره می کنیم . 

در ادامه اطلاعات رو به وسیله `json` به `client` ارسال می کنیم . 



```javascript 
const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userModel.findOne({ username });
    const passowrdIsOky = await compare(password, user.password);
    if (passowrdIsOky) {
  const userToken = await jwt.sign(
        {
          id: user._id,
          username: user.username,
          pic: user.pic,
        },
        process.env.JWT_SECRET,
        {}
      );
      return res
        .status(200)
        .cookie("userToken", userToken, {
          secure: "false",
          sameSite: "none",
        })
        .json({
          id: user._id,
          username,
          pic: user.pic,
        });
}
  } catch (err) {

  }
```
 
که یک سری `option` داریم برای `cookie` مثل `secure` و `sameSite` برای ذخیره کردن `cookie` در سمت سرور نیاز هست که `credinatial ` هم ست کنیم . 

که اینکارو در `cors` در فایل `index.js` انجام دادیم . 

در ادامه ` if ` یک `else` داریم که `throw ` می کنه `err` رو . 

```javascript 
const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userModel.findOne({ username });
    const passowrdIsOky = await compare(password, user.password);
    if (passowrdIsOky) {
  const userToken = await jwt.sign(
        {
          id: user._id,
          username: user.username,
          pic: user.pic,
        },
        process.env.JWT_SECRET,
        {}
      );
      return res
        .status(200)
        .cookie("userToken", userToken, {
          secure: "false",
          sameSite: "none",
        })
        .json({
          id: user._id,
          username,
          pic: user.pic,
        });
} else {
      throw "err";
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json("user or password is worng");
  }
```
در ادامه بلاک `catch` رو داریم . 

اگر `error` داشته باشیم و `login` کاربر به مشکلی بخوره در بلاک `catch` هندل میشه و به سمت `client` ارسال میشه . 

که اینجا اگر کاربر `username` یا `password` خودشو اشتباه بزنه . 

در بلاک `catch` یک `json` ارسال شده که در واقع یک `string` هست . `user or password is worng` . 

اگر سواله که `username` چطوری چک میشه . 

داریم `username` رو از درون `data base` می گیریم و به پسوردش دسترسی می گیریم .

به `compare` پاس میدیم . 

```javascript
  const user = await userModel.findOne({ username });
   const passowrdIsOky = await compare(password, user.password);
```

اینجاست که اگر `username` که کاربر وارد می کنه درون `data base` نباشه . 

در نهایت `user.password` هم وجود نداره با ارور مواجه میشه 

در نتیجه بلاک `else` اجرا میشه که داره `throw` می کنه یک `error` رو . 

```javascript 
else {
      throw "err";
    }
```

و زمانی که `throw` داریم بلاک catch اجرا میشه . 

```javascript 
catch (err) {
    console.log(err);
    return res.status(400).json("user or password is worng");
  }
```

اینجوری میشه که با متغییر `paswordIsOkey` پسورد کاربر رو چک می کنه . 

و چون داریم `findOne` می زنیم `username` رو اگر نباشه باز به ارور می خوریم .

در نتیجه پیام درون  بلاک `catch` به عنوان یک `error` به سمت `clinet` ارسال میشه .

### profileUser Controller 


فانکشن `profileUser`  میاد اطلاعات کاربری که `login` شده رو از درون `token` که درون `cookie` ذخیره شده میگیره .

در صورتی که کاربر `login` شد و `token` که درون `cookie` ذخیره شده رو 

می گیره و اول `token` رو میاد `verify` می کنه   . 

و `token` حاوی اطلاعات کاربری هست که `login`  شده . 



```javascript 
const profileUser = async (req, res) => {
try {
  } catch (err) {
  } 
};
```

درون بلاک `try` میایم `cookie` که ست کردیم رو میگیریم از داخل `req.cookie`

```javascript 
const profileUser = async (req, res) => {
try {
   const { userToken } = req.cookies;
  } catch (err) {
  } 
};
```

که در واقع توکن ما هست حاوی اطلاعات کاربر که لاگین شده .

برای دسترسی اطلاعات نیاز هست که `token` رو `verify` کنیم .

یک `if` داریم گفتیم اگر که `userToken` وجود داشت . 

بیاد `token` رو `verify` کنه . 

در `jwt.verify` مقدار اول اسم `coockie` هست مقدار دوم `secert` که موقع ست کردن `token` تعیین شده .|

مقدار اخر در واقع یک ` { } ` خالی هست . 

در نهایت به وسیله `res.json` اطلاعات رو ارسال می کنیم . 

```javascript 
const profileUser = async (req, res) => {
try {
   const { userToken } = req.cookies;
    if (userToken) {
      const user = await jwt.verify(userToken, process.env.JWT_SECRET, {});
      return res.status(200).json(user);
    }
  } catch (err) {
  } 
};
```

در قسمت `catch` در صورتی که `token` وجود نداشت یک ارور ارسال می کنیم . 


```javascript 
const profileUser = async (req, res) => {
try {
   const { userToken } = req.cookies;
    if (userToken) {
      const user = await jwt.verify(userToken, process.env.JWT_SECRET, {});
      return res.status(200).json(user);
    }
  } catch (err) {
 return res.status(401).json({ error: "Invalid or expired token" });
  } 
};
```

### logoutUser controller 

فانکشن `logoutUser` در واقع `token` رو از درون `cookie` میاید `remove` می کنه در نهایت 

کاربری که `login` هست میاد `logout` میشه , یک پیام مبنی بر `logout` شدن ارسال شده به وسیله `json` .
```javascript
const logoutUser = async (req, res) => {
  try {
    return res.cookie("userToken", "").status(200).json("user is logout");
  } catch (err) {
    console.log("logout controll err", err);
  }
};
```


### exports all controller 

در نهایت تمامی `controller` ها رو `export` می کنیم .

```javascript
module.exports = {
  registerUser,
  loginUser,
  profileUser,
  logoutUser,
};
```


# Routes Folder

![image](https://github.com/mosenn/MERN/assets/91747908/8d19effd-5f86-4020-90e8-0f4eed46bf38)

درون فولدر `routes` میایم از `controller` های که نوشتیم استفاده می کنیم . 

و برای هر `controller` یک ادرس تعیین می کنیم . 

که میشه `api` ریسپانس `controller` هامون رو  درون `api` که می نویسیم  داریم .

در قدم اول نیاز داریم که `Router` رو از دورن `express` صدا بزنیم و استفاده کنیم .

```javascript
const userRoute = require("express").Router();
```

در قدم بعدی تمامی `controller` های که نوشتیم رو `export` می کنیم 

```javascript 
const {
  registerUser,
  loginUser,
  profileUser,
  logoutUser,
} = require("../controller/user");
```

در ادامه میایم `route` هارو می نویسیم و `controller` ها رو بهش پاس میدیم 

```javascript 
//* POST create user (register user)
userRoute.post("/register", registerUser);
//* POST login user
userRoute.post("/login", loginUser);
//* Get user online with cookie ( jwt user token)
userRoute.get("/profile", profileUser);
//* logout
userRoute.post("/logout", logoutUser);
```

در هر ادرسی میاد فانکشن که به عنوان contorller نوشتیم اعمال میشه .

و ریسپانس رو به ما برگشت میده  . 

کافیه که `userRoute` که داریم بیایم `export` کنیم و درون `index.js` ازشون استفاده کنیم . 

```javascript

module.exports = userRoute;
```

درون `index.js` میایم از `route` های که نوشتیم استفاده می کنیم . 

```javascript 
app.use("/", require("./routes/user"));
```

به این شکل ازش استفاده می کنیم . 

# Posts 

در این بخش هر کاربری که لاگین کرده می تونه یک پست ایجاد کنه . 

در واقع ایجاد پست رو سمت سرور داریم به وسیله کاربر . 


### Post Schema

برای اینکه بتونیم ایجاد `post` رو داشته باشیم اول نیاز داریم که یک `schema` پست داشته باشیم . 

میایم درون فولدر `model` و یک فایل به اسم `post` می سازیم : 

<img src='https://github.com/mosenn/MERN/assets/91747908/c327c675-2efb-4e98-ba60-6ea2278e6159' alt='create model in express' />

میایم درون این فایل `model`  مربوط به `post` رو ایجاد می کنیم : 

```javascript 
const mongoose = require("mongoose");
const commentModel = require("./comment");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    summery: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },
    cover: {
      type: String,
      required: true,
    },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  {
    timestamps: true,
  }
);
const postModel = mongoose.model("posts", postSchema);
module.exports = postModel;

```

موقع ساخت `schema post` امدیم 1 `ref` زدیم  به `author` . 

برای اینکه بتونیم متوجه شیم چه کاربری امده `post` رو ساخته . 

این کار به وسیله `ObjectId` انجام میشه . 

به `id` کاربری که پست رو ساخته دسترسی می گیریم و متوجه می شیم که چه کاربری پست رو ایجاد کرده . 

که اینجا موقع ساخت پست نیاز هست که `id` کاربری که `login` هست برای `author` ست کنیم  .

که کمی پایین تر به این موضوع پرداخته شده .  

و گرفتن پست های که ایجاد شده رو براشون api می نویسیم که در سمت کلاینت بتونیم `post` های ساخته شده رو نمایش بدیم . 

### Post controller 


درون `controller` میایم فایل `post.js` رو اضافه می کنیم . 

<img src='https://github.com/mosenn/MERN/assets/91747908/d45d0a00-c91c-425d-8408-9a5417240a28' alt='expressjs server'>

درون `controller post` قرار عملیات `crud` رو انجام بدیم . 
.
پست رو بسازیم , پست های ساخته شده درون دیتا بیس رو بگیریم و بفرسیتم سمت کلاینت  ,  اپدیت کنیم , پاک کنیم 

**نکته :** در واقع `crud`  مخفف `create` , `read` , `update` , `delete` هست . 


### Create post controller

اولین کاری که صورت میگیره ساخت `post` هست . 

پس میایم فانکشن که قرار ساخت پست رو انجام بده ایجاد می کنیم در واقع `controller` که قرار هست `controller` رو انجام بده یا همون کنترل کنه . 

```javascript 
const createPost = async (req, res) => {

};
```

در ادامه مقادیر که نیاز هست رو داشته باشیم از `req.body`  میگیریم که این مقادیر از سمت فرانت ارسال میشه . 

و البته درون `schema post` هم همین مقادیر تعریف شده . 

```javascript 
const createPost = async (req, res) => {
  const { content, title, summery, cover } = req.body;
```

خب نیا هست `model post` که ایجاد شده رو درون بلاک  try صدا بزنیم و پست خودمون رو به وسیله متد `create` ایجاد کنیم . 

دقیقا مثل ساخت کاربران در قسمت `register` . 

```javascript 
const createPost = async (req, res) => {
  const { content, title, summery, cover } = req.body;
  try {
    const { userToken } = req.cookies;
    if (userToken) {
      const user = await jwt.verify(userToken, process.env.JWT_SECRET, {});
      const post = await postModel.create({
        content,
        title,
        summery,
        cover,
        author: user.id,
      });
      return res.status(201).json({ data: post, message: "post is create" });
    }
  } catch (err) {
    console.log("Create Post", err);
    return err;
  }
};
```
درون بلاک `try` در کد بالا اول `userToken` رو از `req.cookies` گرفتیم . 

اگر یادتون باشه زمانی که کاربر `login` میشه در سایت یک `token` در `cookie` سرور میاد set میشه . 

که این `cookie` حاوی اطلاعات کاربری هست که `login` شده . 

و بودن این `cookie` نشون دهنده این موضوع هست که کاربر ما لاگین شده . 

برای اینکه در اینجا می خوایم فقط کاربر های که لاگین هستند بتونند post ایجاد کنند . 

```javascript
  try {
    const { userToken } = req.cookies;
    if (userToken) {
      const user = await jwt.verify(userToken, process.env.JWT_SECRET, {});
      const post = await postModel.create({
        content,
        title,
        summery,
        cover,
        author: user.id,
      });
      return res.status(201).json({ data: post, message: "post is create" });
    }
```

نیاز داریم اول چک کنیم ببینم که کاربر ما لاگین شده یا نه که اینکار رو به وسیله `userToken` انجام دادیم  . 

قدم بعدی نیاز داریم به `id` کاربر که لاگین شده دسترسی داشته باشیم چون می خوایم بدونیم کدوم کاربر داره یک پست رو ایجاد می کنه . 

برای اینکه به `id` کاربری که لاگین شده دسترسی بگیریم نیا داریم توکن خودمون رو `verify` کنیم و `id` رو بکشیم بیرون . 

در اینجا `author` در `schema post` یک `type objectId` هست که `ref` زده شده به `schema users` . 

می تونید `schema post` رو باز چک کنید .

به وسیله `ref` می تونیم متوجه شیم که چه کاربری چه پستی رو ایجاد کرده . 

که از این موضوع استفاده می کنیم و پست های هر کاربری رو در `panel` خودش نشون می دیم . 

و همینطور موقع گرفتن همه ی پست های به وسیله `author` کاربری که ایجاد کرده میایم نشون میدیم . 

در نهایت یک `response` که حاوی اطلاعات پست ساخته شده و همینطور یک `message` هست رو به سمت کلاینت ارسال می کنیم . 

```javascript
return res.status(201).json({ data: post, message: "post is create" });
```

درون بلاک `catch` هم ارور ها رو ارسال می کنیم اگر که مشکلی پیش امده باشه . 

هم لاگ سمت سرور رو داریم که متوجه شیم `error` که درون کنسول هست ماله چه بخشی از کد هست . 

و هم خوده `error` به سمت `client` ارسال شده که `client` هم متوجه `error` شه . 

```javascript
catch (err) {
    console.log("Create Post", err);
    return err;
  }
```

## Get all post controller

بعد از ایجاد `post` توسط کاربر . 

نوبت گرفتن تمامی پست های هست که ایجاد شده . 

پس نیاز به یک `controller` داریم . 

**یاداوری : ** هر `controller` در واقع یک `function` هست که عملیاتی درونش صورت میگیره . 

```javascript 
const posts = async (req, res) => {

};
```

خب `controller posts` رو به طور کامل ببینیم : 

```javascript
const posts = async (req, res) => {
  try {
    const posts = await postModel
      .find()
      .populate("author", "username", "pic", "_id")
      .sort({ createdAt: -1 });
    return res.status(200).json(posts);
  } catch (err) {
    console.log("All Post Err", err);
    return res.status(500).json({ message: "server is proplem", err: err });
  }
};
```

در کد بالا داریم از `postModel` به وسیله متد `find` به تمامی پست ها دسترسی می گیریم . 

اما اگر دقت کنید بعد از `find` از یک متد دیگه هم استفاده شده به اسم `populate` .  

متد `populate`  دو تا `parameter`  میگیره . 

پارامتر اول مقداری هست که می خوایم یه همراه `post` ها پیدا شه . 

الان میاد پست ها رو که پیدا کرده میره داخل `collection users` با توجه به `objectId` مشخصات کاربری که پست رو ساخته  پیدا می کنه  . 

پارامتر دوم `populate` به این اشاره داره که از `user` که پیدا شده به همراه پست داره ارسال میشه , چه مقادیری رو داشته باشه . 

که گفتیم `username` و `pic` و همینطور `_id` رو به همراه داشته باشه . 

در ادامه متد `sort` رو  استفاده کردیم 

که دیتا رو بر اساس `createAt`  که درون هر `document post` وجو داره میاد `sort` رو انجام میده . 

در واقع هر پست جدیدی که ساخته میشه به عنوان اولین پست در `response` نمایش داده میشه  . 

### User post controller 

یک `controller` داریم به اسم `userPost` که  این `controller`  میاد `post` ها رو بر اساس `author` می گیره . 

در واقع میاد پست ها رو بر اساس کاربری که اون پست رو ایجاد کرده میگیره . 

یعنی پست های که توسط یک کاربر ایجاد شده رو `response` میده .

به عنوان مثال : 

کاربر محسن میاد 10 تا `post` ایجاد می کنه . 

و می خوایم تمامی پست های که توسط کاربر محسن ایجاد شده رو داشته باشیم . 

و در `panel` کاربری خودش نمایش بدیم . 

برای اینکار و داشتن پست های یک کاربر `controller userPost` رو ایجاد کردیم . 
```javascript
const userPost = async (req, res) => {

};
```
که درونش کد های زیر رو داریم : 

```javascript
//*method Get author post
  const { userToken } = req.cookies;
  try {
    // console.log("User Token", userToken);
    if (userToken) {
      const user = await jwt.verify(userToken, process.env.JWT_SECRET, {});
      const userPost = await postModel.find({ author: user.id });
      return res.status(200).json(userPost);
    }
  }catch (err) {
    console.log("User Post Error", err);
    return res
      .status(500)
      .json({ message: "server is proplem about user post", err: err });
  }
```

چک کردیم در ادامه که اگر `userToken`  بود بیاد این اتفاق بیوفته . 

اگر کاربر ما لاگین بود . 

اگر که چک نکنیم و بخوایم از `jwt.verify` استفاده کنیم با ارور سمت سرور مواجه می شیم . 

چون داریم `user.id` رو از `token` که در `cookie` ذخیره شده دریافت می کنیم . 

در نتیجه گفتیم `postModel` بیاد `find` شه توسط `author` که یک ابجکت هست . 

میاد `author` رو پیدا میکنه بعدش میاد توسط `user.id` پیدا کردن رو انجام میده .

در نتیجه `post` های که توسط  کاربر  مد نظر ما ایجاد شده پیدا میشه و به سمت کلاینت ارسال میشه . 

اینجوری میشه که تمام پست های که به عنوان مثال توسط کاربر محسن ایجاد شده خواهیم داشت . 

در صورت داشتن ارور هم بلاک `catch` اتفاق می افته 

```javascript
catch (err) {
    console.log("User Post Error", err);
    return res
      .status(500)
      .json({ message: "server is proplem about user post", err: err });
  }
```

### Edit post controller 

خب شاید کاربر ما خواست پستی که ساخته رو edit کنه . 

برای اینکار هم نیاز به یک `controller` داریم به اسم `editPost` .  

```javascript
//* method Put  edit post
const editPost = async (req, res) => {

};
```

برای `edit` کردن . نیاز هست که مقادیر جدید رو بگیریم و جایگزین مقادیر قبلی کنیم . 

خب میایم مقادیر جدید رو از `req.body` می گیریم . 

خب سوال اینجاست از کجا مشخص میشه که چه پستی رو می خوایم `edit`  کنیم ؟ 

اینکه چطوری متوجه میشیم که چه پستی قرار هست edit شه . اینکار توسط ایدی انجام میگیره . 

```javascript 
//* method Put  edit post
const editPost = async (req, res) => {
  const id = req.params.id;
  // console.log("Edit post Id ", id);
  const { userToken } = req.cookies;
  const { summery, title, content, cover } = req.body;
};
```

اگر دقت کنید  یک `const id = req.params.id` داریم که در واقع `id` پست هستش  به وسیله `req.params.id` این `id` رو گرفتیم . 

خب این `req.params.id` در واقع از مست `client` ارسال میشه درون `address api` که نوشتیم 

که درون `route` اگر نگاه کنیم `id:/` برای `controller editpost` ست شده . 

```javascript 
postRouter.put("/editpost/:id", editPost);
```
**نکته :** همیشه برای `delete` و `edit` نیاز به `ObjectId` داریم 

که به وسیله `id` پست می تونیم بگیم که کدوم پست قرار هست در `data base` بیاد و `edit`  شه . 

خب هر کاربری می تونه فقط پست خودشو رو بیاد اپدیت کنه

پس  به `user.id` هم نیاز داریم که از داخل `token` می گیریم . 

به کل `controller editPost` نگاه کنیم : 

درون بلاک `try` گفتیم اگر که `userToken` بود بع معنی اینکه اگر کاربر `login` بود . 

بیاد درون `postModel`  از متد `findByIdAndUpdate` استفاده کردیم . 

تا به وسیله `id`  که در واقع همون `objectId` هست که از `req.params.id` داره گرفته میشه . 

با `id` بیاد `post` رو پیدا کنه و در نتیجه مقادیر جدید که از `req.body` میاید رو جایگزین مقادیر قبلی شه . 


```javascript 
//* method Put  edit post
const editPost = async (req, res) => {
  const id = req.params.id;
  // console.log("Edit post Id ", id);
  const { userToken } = req.cookies;
  const { summery, title, content, cover } = req.body;
  try {
    if (userToken) {
      const post = await postModel.findByIdAndUpdate(
        id,
        {
          title: title,
          summery: summery,
          content: content,
          cover: cover,
        },
        {
          new: true,
        }
      );
      // console.log(post);
      await post.save();
      return res.status(200).json(post);
    }
  } catch (err) {
    console.log("Edit Post Error Controller", err);
    return res
      .status(400)
      .json({ message: "post is not edit", errMessage: err });
  }
};
```

توجه کنید که به `if` که داره `userToken` رو چک می کنه نیاز داریم در غیر اینصورت سمت سرور به اررور می خوریم . 

```javascript
 if (userToken) {
}
```

در ادامه `post` که تغییر کرده رو  به وسیله متد `save` در دیتا بیس ذخیره کردیم . 

```javascript
  await post.save();
```
در ادامه بعد از ذخیره شدن `post` در دیتا بیس امدیم به سمت `client` فرستادیم . 

```javascript
      await post.save();
      return res.status(200).json(post);
```

در ادامه در بلاک `catch` ارور رو داریم . 

```javascript 
catch (err) {
    console.log("Edit Post Error Controller", err);
    return res
      .status(500)
      .json({ message: "post is not edit", errMessage: err });
  }
```

خب ساخت `controller editpost` رو هم انجام دادیم . 

### Delete post 

بریم سراغ `delete` که دیگه عملیات `crud` رو تکمیل کنیم . 

```javascript 
//*method Delete Post
const deleteUserPost = async (req, res) => {
  const id = req.params.id;
  console.log("ID", id);
  const { userToken } = req.cookies;
};
```

اینجا هم برای اینکه بتونیم `post` مد نظرو `delete` کنیم که بدونیم چه پستی داره `delete` میشه نیاز به `ObjectId` داریم . 

که این `objectId` به همراه دیتا هست  . 

که به وسیله دیتای که سمت `client` گرفته میشه , `objecetId` رو به سمت `server` درون ادرس `api` فرستاده میشه که در واقع همون `params` هست  . 

```javascript 
//*method Delete Post
const deleteUserPost = async (req, res) => {
  const id = req.params.id;
  console.log("ID", id);
  const { userToken } = req.cookies;
  try {
    if (userToken) {
      const userPost = await postModel.findByIdAndRemove(id);
      if (!userPost) {
        return res.status(404).json("this post is not exist");
      }
      return res.status(200).json(userPost);
    }
  } catch (err) {
    console.log("Delete Post Error", err);
  }
};
```

باز دوباره چک می کنیم ببینیم که `userToken` هست یا نه اگر کاربر `login` بود بتونه `delete` رو انجام بده . 

که به وسیله `postModel` , و متد `findByIdAndRemove` کار رو انجام دادیم . 

که متد `findByIdAndRemove`  که صرفا پست رو اول پیدا می کنه و بعد  با توجه به `id` میاد پست رو پاک می کنه . 

یک `if` داریم که اگر `id` مورد نظر اون پست وجود نداشت بیاد یک پیام به سمت `client` ارسال کنه : 

```javascript
     if (!userPost) {
        return res.status(404).json("this post is not exist");
      }
```

درون بلاک `catch` هم ارور زیر رو ارسال می کنیم : 

```javascript 
catch (err) {
    console.log("Delete Post Error", err);
    return res
      .status(500)
      .json({ message: "server is proplem(delete)", err: err });
  }
```

یک بار دیگه کل `controller` مربوط به `delete` رو ببنیم : 

```javascript
//*method Delete Post
const deleteUserPost = async (req, res) => {
  const id = req.params.id;
  console.log("ID", id);
  const { userToken } = req.cookies;
  try {
    if (userToken) {
      const userPost = await postModel.findByIdAndRemove(id);
      if (!userPost) {
        return res.status(404).json("this post is not exist");
      }
      return res.status(200).json(userPost);
    }
  } catch (err) {
    console.log("Delete Post Error", err);
    return res
      .status(500)
      .json({ message: "server is proplem(delete)", err: err });
  }
};
```

# Post Router 

تمامی `controller` های که نوشتیم نیاز هست که برای اجرا شدن یک `address` در واقع یک `api` داشته باشند . 

به همین دلیل یک فایل جدید به اسم `post.js` در فولدر `routes` ایجاد می کنیم . 


<img src='https://github.com/mosenn/MERN/assets/91747908/e4b2ed94-8a27-4615-8cd6-48c93c8e0056' alt='router in expressjs'>


درون فایل خودمون میایم اول `express.Router`  رو `require` می کنیم . 

بعد میایم تمامی `controller `  ها ی که برای `post` ایجاد کردیم رو `require` می کنیم 


```javascript 
const postRouter = require("express").Router();
const {
  createPost,
  posts,
  userPost,
  deleteUserPost,
  editPost,
} = require("../controller/post");
```

حالا میایم `api` خودمون رو برای `controller` ها می نویسیم . 

```javascript
postRouter.post("/createpost", createPost);
postRouter.get("/posts", posts);
postRouter.get("/userposts", userPost);
postRouter.delete("/deletepostuser/:id", deleteUserPost);
postRouter.put("/editpost/:id", editPost);
```
دقت کنید برای `deletepostuser` و `edipost` امدیم یک  `id:/` هم گذاشتیم در ادرس `api` . 

خب این ایدی قرار هست از سمت `clinet` درون ادرس `api` قرار بگیره که در واقع گفتیم همون `objectId` هست . 

برای `delete` , `update` به `objectId` خوده `document`  که در دیتا بیس ایجاد شده نیاز داریم . 

متد ها هم که مشخصه برای ساخت از `post` استفاده شده برای گرفتن یا همون `read` از `get` استفاده شده . 

برای پاک کردن از متد `delete` استفاده شده و برای `update` از متد `put` استفاده شده . 

در نهایت `postRouter` رو `export` می کنیم و در `index.js`  از این `route` استفاده می کنیم . 

```javascript
module.exports = postRouter;
```

داخل `index.js` : 

```javascript 
app.use("/", require("./routes/post"));
```

خب کافیه الان `clinet` بیاد `api` های که نوشته شده رو بگیره و استفاده کنه . البته درون `postman` هم می تونه تست کنه . 
