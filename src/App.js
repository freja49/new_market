import logo from './logo.svg';
import './App.css';
import coverImage from "./assets/banner.png";
import avatar from "./assets/avatar.png";
import Tabs, {Tab} from 'react-best-tabs';
import 'react-best-tabs/dist/index.css';
import React from "react";
import Test from "./Test";
import verified from "./assets/verified.png";
import "./index.css";
import yoshiki from "./assets/yoshiki.jpg";


export default function App() {
  return (
   <div className="container-fluid" >
     <div>
       <div>
         <div>
           <div style={{height: '358px'}}>
             <div className="topbanner"></div>
             <img style={{
               display: 'none',
               height: 358,
               objectFit: 'cover',
               objectPosition: '0 0',
               position: 'relative',
               top: '-358px'
             }} src={coverImage}/>
           </div>
           <div style={{position: 'relative', top: '-55px', display: 'flex', flexWrap: 'wrap'}} className="avatar_container">
             <div className="col-md-3 col-sm-6 col-12 profile_top"
                  style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center',padding:"0 10px"}}>

               <img style={{objectFit: 'cover', height: 220, width: 220, marginBottom: '20px',borderRadius:"50%"}}
                    src={yoshiki}/>

               <div className="follow_but">
                 <a href="x">
                   <svg xmlns="http://www.w3.org/2000/svg" width="15" fill="rgba(255, 255, 255, 0.25)"
                        className="bi bi-plus-square-fill" viewBox="0 0 16 16">
                     <path
                         d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
                   </svg>
                   Follow </a>
               </div>
             </div>
             <div className="col-md-8 col-sm-6 col-12 profile_bottom">
          <span>
            <p className="artistName"style={{marginBottom: '35px'}}>
              Yoshiki
                <img style={{
                  width: 25,
                  marginLeft: 10,
                  borderWidth: 0
                }} src={verified}/>
          </p>
          </span>
               <div style={{display: 'flex', marginBottom: '38px'}}>
                 <div className="num_div">
                   <span className="num white80">213</span><br/>
                   <span className="grey">RELEASES</span>
                 </div>
                 <div className="num_div">
                   <span className="num white80">3.4M</span><br/>
                   <span className="grey">FOLLOWERS</span>
                 </div>
                 <div className="num_div">
                   <span className="num white80">5699</span><br/>
                   <span className="grey">FOLLOWING</span>
                 </div>
               </div>

               <p className="desc white80" style={{lineHeight: '18px'}}>
                 Lorem ipsum dolor sit amet,
               </p>
             </div>
           </div>
         </div>

         <div className="container" style={{display: 'none'}}>

           <div className="row">
             {/*{*/}
             {/*  nftData[0].map((item, index) => (*/}
             {/*      <Card item={item} key={index}/>*/}
             {/*  ))*/}
             {/*}*/}
           </div>


         </div>
         <div className="container-fluid" style={{marginTop: '-45px'}}>
           <Tabs activeTab="1" className="mt-5 container" ulClassName="" activityClassName="bg-white"
                 onClick={(event, tab) => console.log(event, tab)}>
             <Tab title="Feed" className="m-6 tab_1">
               <div style={{display: 'flex', justifyContent: 'center'}}>
                 <div className="feed_card  col-md-5 col-sm-10 col-10">
                   <div className="card_head">
                     <div style={{display: 'flex'}}>
                       <div className="artist_avatar"
                            style={{background: 'blue', width: '48px', height: '48px', borderRadius: '240px'}}>

                       </div>

                       <div style={{marginLeft: '16px'}}>
                         <div>
                           <span className="card_name">JB</span>
                           <span className="card_day"> · 4d</span>
                         </div>
                         <div className="label">
                           CIRCLE EXCLUSIVE
                         </div>
                       </div>
                     </div>
                     <div>
                       <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="rgba(255,255,255,0.25)"
                            className="bi bi-three-dots" viewBox="0 0 16 16">
                         <path
                             d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                       </svg>
                     </div>
                   </div>
                   <div className="card_body" style={{borderBottom: '1px solid rgba(255, 255, 255, 0.04)'}}>
                     <div style={{
                       borderRadius: '8px',
                       height: '349px',
                       maxWidth: '540px',
                       background: 'url(https://www.pollstar.com/Image/Photos/2018/05/1660ad68-7b85-495e-9875-b00af40678c0-bocoachweektwogunsxjp.jpg) no-repeat',
                       backgroundSize: 'cover'
                     }}>
                     </div>
                     <div style={{display: 'flex'}}>
                       <div className="icon">
                         <svg xmlns="http://www.w3.org/2000/svg" width="12" fill="rgba(255,255,255,0.25)"
                              className="bi bi-heart-fill" viewBox="0 0 16 16">
                           <path fillRule="evenodd"
                                 d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                         </svg>
                         <span> 3.2K</span>
                       </div>
                       <div className="icon">
                         <svg xmlns="http://www.w3.org/2000/svg" width="19" fill="rgba(255,255,255,0.25)"
                              className="bi bi-arrow-repeat" viewBox="0 0 16 16">
                           <path
                               d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
                           <path fill-rule="evenodd"
                                 d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
                         </svg>
                         <span> 262</span>
                       </div>
                       <div className="icon">
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgba(255,255,255,0.25)"
                              className="bi bi-chat-text-fill" viewBox="0 0 16 16">
                           <path
                               d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z"/>
                         </svg>
                         <span> 262</span>
                       </div>
                       <div className="icon">
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" fill="rgba(255,255,255,0.25)"
                              className="bi bi-arrow-bar-up" viewBox="0 0 16 16">
                           <path fillRule="evenodd"
                                 d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"/>
                         </svg>
                       </div>
                     </div>


                   </div>
                   <div className="card_bottom">
                     <div className="comment">
                       <div style={{
                         marginRight: '16px',
                         background: 'blue',
                         width: '48px',
                         height: '48px',
                         borderRadius: '50%',
                         flexShrink:"0"
                       }}>

                       </div>
                       <div>
                         <div style={{display: 'flex'}}>
                           <span className="card_name">Apple  </span>
                           <span className="card_day"> · 4d</span>
                         </div>
                         <p>Ecstatic that I get to see the MV before it releases!</p>
                       </div>
                     </div>
                     <div className="comment">
                       <div style={{
                         marginRight: '16px',
                         background: 'blue',
                         width: '48px',
                         height: '48px',
                         borderRadius: '50%'
                       }}></div>
                       <div>
                         <div style={{display: 'flex'}}>
                           <span className="card_name">Aaron</span>
                           <span className="card_day"> · 4d</span>
                         </div>
                         <p>This track is straight fire 🔥🔥🔥</p>
                       </div>
                     </div>
                     <div className="write_comment">
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgba(255,255,255,0.25)"
                            className="bi bi-chat-text-fill" viewBox="0 0 16 16">
                         <path
                             d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z"/>
                       </svg>
                       <p>Write a comment...</p>
                     </div>
                   </div>

                 </div>
               </div>
             </Tab>

             <Tab title="Tracks" className="m-5">
               <div className="mt-3" style={{height: '400px'}}>
                 Tab 2 content
               </div>
             </Tab>

             <Tab title="Playlists (TBD)" className="m-6">
               <div className="mt-3" style={{height: '400px'}}>
                 Tab 3 content
               </div>
             </Tab>

           </Tabs>
         </div>

       </div>

       <Test />
     </div>
   </div>
  );
}


