import  {Blogs1,Features1,Footers1,Headers1,Possibilitys1,WhatGp3s} from "./Container"
import {Navbars1,Brands1,CTA1,Feature1,Article1} from  "./Components"

import "./App.css"



function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
      <Navbars1/>
      <Headers1/>
      </div>
      <Brands1/>
      <WhatGp3s/>
      <Features1/>
      <Possibilitys1/>
      <CTA1/>
      <Blogs1/>
      <Footers1/>
    </div>
  );
}

export default App;
