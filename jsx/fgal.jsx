/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
  class IriGall extends React.Component {
             
      constructor(props) {
        super(props);               
           this.state = {img_name: ""};     
              
            }
      
 
              
//------------------------------------------------------------------------------        
       render() {
     
       function galImg(){ 
         return(
                <img   className="gal-block-max-img" src={aGaler.imgBuf }/>
                );
    };  
  
        
//------------------------------------------------------------------------------           
      function galLine(){
       return aGaler.ajaxBuf.map(                     
              function(item, i, arr){
              function minClick(){
                    aGaler.imgBuf=i;
                } 
                  
                 return (  
                  <div className="gal-block-img-wrap">        
                     <img id={'gal-block-img-'+i} className="gal-block-img" src={arr[i]} alt={arr[i]} onClick={minClick}/>
                  </div>   
                  
                 );
                   
                }     
             );       
                             
        }   
 //----------------------------------------------------------------------------       
        function lBtnCl(){
            aGaler.mbtnClick('lbtn');
            
        };
        
        function rBtnCl(){
            aGaler.mbtnClick('rbtn');
           
        };
        function lBclose(){
           aGaler.GalOpnClose('off'); 
        };
        
        function lBtnImgCl(){
          aGaler.mbtnImgClick('lbtn');
            
        };
        
        function rBtnImgCl(){
           aGaler.mbtnImgClick('rbtn');
           
        };
      
        return (
            <div className="bounceInUp wow gal-block-wrap">
                <div className="gal-block-wrap-btn" onClick={lBclose}></div>
              <div className="gal-block-max-wrap">
                 <div className="gal-block-lrImgbtn" id="gal-block-l-Imgbtn" onClick={lBtnImgCl}></div>
                 <div className="gal-block-lrImgbtn" id="gal-block-r-Imgbtn" onClick={rBtnImgCl}></div>
                {galImg()}
              </div>
              
              <div className="gal-block-mini-wrap">
                 <div className="gal-block-lrbtn" id="gal-block-l-btn" onClick={lBtnCl}></div>
                 <div className="gal-block-lrbtn" id="gal-block-r-btn" onClick={rBtnCl}></div>
                 <div className="gal-block-mini-line-hidden">
                 <div className="gal-block-mini-wrap-line" id="gal-block-mini-wrap-line-1">
                  {galLine()}
                 </div>
                </div> 
              </div>
                      
            </div>        
             );
        }
 };
 

  $(document).ready(function () { 
     ReactDOM.render(  <IriGall />, document.getElementById("gal-block-1") );
   }       
  );
 
setInterval( function(){
  ReactDOM.render(  <IriGall />, document.getElementById("gal-block-1") ); 
   aGaler.calocMinLength();
       },1000);