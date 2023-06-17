
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
- setErrorRegister

```javascript
export const registerUser = async (
  UserRegisterData: registeruserType,
  setErrorRegister: Dispatch<SetStateAction<ErrorRegister>>
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
  setErrorRegister: Dispatch<SetStateAction<ErrorRegister>>
) => {
};
```

نوع تایپ parameter UserRegisterData برابر شده با registeruserType . 

```typescript
interface registeruserType {
  username: string;
  password: string;
  confirmPassword: string;
  pic: string;
}
```

که در واقع یک `interface` تعریف شده هست . 


**نکته**: برای تعریف کردن نوع تایپ ها از قابلیت interface تایپ اسکریپت استفاده شده .   

که همونطور که مشاهده میشه اطلاعات مربوط به کاربر هست که برار با `string` . 

### Parameter setErrorRegister

خب بریم سراغ parameter setErrorRegister . 

در واقع یک state هست . 

که کار ذخیره سازی ارور های مربط به ثبت نام کاربر رو درون خودش ذخیره می کنه . 

کار این setErrorRegister در واقع اگر موقع ارسال اطلاعات کاربر 

اروی داشتیم ارور ها درون state setErrorRegister ذخیره میشن . 
#### Type setErrorRegister 

از اون جا که setErrorRegister کار set شدن state errorRegister رو انجام میده 

نوع تایپ که در react برای setState تعریف میشه `<SetStateAction>` هست . 

اما از اونجا که ارور های ما به صورت یک ابجکت هست . 

و state errorRegister هم یک ابجکت هست . 

نیازه که تایپ default خوده state رو هم براش تعریف کنیم . 

در نتیجه یک interface برای اینکار تعریف کردیم 
```typescript
interface ErrorRegister {
  username?: string;
  password?: string;
  email?: string;
}
```

تایپ نهایی state setErrorRegister میشه کد زیر : 
```javascript
export const registerUser = async (
  UserRegisterData: registeruserType,
  setErrorRegister: Dispatch<SetStateAction<ErrorRegister>>
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

درون فانکشن به value input ها دسترسی میگیریم . 

```javascript
export const registerUser = async (
  UserRegisterData: registeruserType,
  setErrorRegister: Dispatch<SetStateAction<ErrorRegister>>
) => {
  const { username, password, confirmPassword, pic } = UserRegisterData;
};
```
بعد از دسترسی گرفتن نوبت به ارسال اطلاعات گرفته شده به سمت سرور هست . 

برای اینکه بتونیم error هارو هم داشته باشیم . 

در کل error هارو handle کنیم از block try / catch استفاده می کنیم . 
```javascript
export const registerUser = async (
  UserRegisterData: registeruserType,
  setErrorRegister: Dispatch<SetStateAction<ErrorRegister>>
) => {
  const { username, password, confirmPassword, pic } = UserRegisterData;
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
  setErrorRegister: Dispatch<SetStateAction<ErrorRegister>>
) => {
  const { username, password, confirmPassword, pic } = UserRegisterData;
  try {
    const register = await axios.post(
      `${baseUrl}/register`,
      {
        username,
        password,
        confirmPassword,
        pic,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return register;
  } catch (err: any & { response?: unknown }) {
  }
};
```
در ادامه data رو می فرستیم که اطلاعات کاربر هستش 

```javascript
       const register = await axios.post(
      `${baseUrl}/register`,
      {
        username,
        password,
        confirmPassword,
        pic,
      },  
```

در ادامه `headers` ست شده . 


```javascript
   const register = await axios.post(
      `${baseUrl}/register`,
      {
        username,
        password,
        confirmPassword,
        pic,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
```
در نهایت متغیری که برای ارسال اطلاعات به اسم `register` تعریف شده . 

درون بلاک try میایم return می کنیم . 

به این دلیل که می خوایم اطلاعاتی که api به ما response میده رو درون کامپونت [Register.tsx](#base-url-axios-option)

دسترسی داشته باشیم . response که api /register به ما میده در واقع اطلاعات کاربری هست که ثبت نام کرده . 

در نهایت درون بلاک try کد زیر رو خواهیم داشت : 
```javascript
export const registerUser = async (
  UserRegisterData: registeruserType,

  setErrorRegister: Dispatch<SetStateAction<ErrorRegister>>
) => {
  const { username, password, confirmPassword, pic } = UserRegisterData;
  console.log(UserRegisterData);
  try {
    const register = await axios.post(
      `${baseUrl}/register`,
      {
        username,
        password,
        confirmPassword,
        pic,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    // console.log(register, "response user is register");
    return register;
```
**نکته**: می تونیم برای اطمینان بیشتر که `data` رو داریم یا خیر یک `console.log` داشته باشیم

قبل از `return` 

```javascript
 console.log(register, "response user is register");
```

### catch block 

درون بلاک `catch` میایم ارور های مربوط به register error کنترل می کنیم . 

اگر یادتون باشه یک [setErrorRegister](#base-url-axios-option) به عنوان parameter داشتیم . 

که وظیفه این set state در واقع ذخیره کردن ارور های مربوط به ثبت نام کاربر هست  . 

در نتیجه این ارور هارو درون یک state به اسم errorRegister خواهیم داشت . 

که این state در کامپونت Register.tsx ایجاد شده . 

از اونجای که ارور های ما از سمت سرور به صورت ابجکت ارسال میشه . 

در نتیجه state errorRegister به صورت ابجکت است . 

بلاک catch : 

```javascript
catch (err: any & { response?: unknown }) {
    console.log(err);
    const errors = err?.response?.data;
    setErrorRegister(errors);
  }
```

نوع تایپ err رو روی any گذاشتیم و نوع response رو گفتیم اگر `undefinde` نبود بیاد `unknown` باشه

به این دلیل که نمی تونیم تشخیص بدیم که نوع تایپ err دقیقا چی می تونه باشه . 

خب در نهایت کد کامل register function به صورت زیر هست : 

```javascript
export const registerUser = async (
  UserRegisterData: registeruserType,

  setErrorRegister: Dispatch<SetStateAction<ErrorRegister>>
) => {
  const { username, password, confirmPassword, pic } = UserRegisterData;
  console.log(UserRegisterData);
  try {
    const register = await axios.post(
      `${baseUrl}/register`,

      {
        username,
        password,
        confirmPassword,
        pic,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    // console.log(register, "response user is register");
    return register;
  } catch (err: any & { response?: unknown }) {
    console.log(err);
    const errors = err?.response?.data;
    setErrorRegister(errors);
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
    console.log("User Data in api LoginUser Function" , user );
    localStorage.setItem("userInfoData", JSON.stringify(user.data));
    return user;
  } catch (err) {
    console.log(" login api err ", err);
  }
};
```
در بلاک try به وسیله axios دیتا مد نظرمون که همون اطلاعات کاربر که قصد لاگین هست رو فرستادیم . 

در ادامه `response` که برگشت میده , درون `localstorge` ذخیره کردیم . 

```javascript
  localStorage.setItem("userInfoData", JSON.stringify(user.data));
```

به این دلیل که می خوایم بعدا در جای دیگه از این data که داریم ذخیره می کنیم استفاده کنیم . 

-البته به این صورت فانکشن از pure function خارج میشه . 
