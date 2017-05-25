/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class gallControl {
    
    constructor(minLineTag,galTag) {
        this.galaTags=galTag;
        this.mLineTag= minLineTag;
        this.folderName='' ;
        this.folderLName='' ;
        this.bBuf=[];
        this.bBufMax=[];
        this.bImg;
        this.mimgLength=0;              // Общая длинна линии миниатюр с отступами
        this.imgLarr=[];                // массив шерины каждой миниатюры 
        this.imgMargin=3;               // отступ каждой миниатюры пикселей
        this.btnClickIndex=0;
        this.jsonOb=new Array() ;
    };
    
    get ajaxBuf() {
        return this.bBuf;
    };
    
     get ajaxBufMax() {
        return this.bBufMax;
     };
    
    get folderN() {
        return  this.folderName;
    };
    
    get folderLN() {
        return  this.folderLName ;
    };
    get imgBuf(){
         return  this.bImg ;
    };
    
    set  imgBuf(aVar){
          this.bImg=this.bBufMax[aVar] ;
          this.btnClickIndex= aVar;
          for (let i=0;i<=this.imgLarr.length-1;i++){
               if (i!==aVar){
                  $('#gal-block-img-'+i.toString()).css({transform:'scale(1)', border:'none'} );  
               }else{
                  $('#gal-block-img-'+aVar.toString()).css({transform:'scale(1.05)', border:'solid 1px #ff6600'} );    
               };
              
          }
 
    };
    
    get imgLineArr(){
        return  this.imgLarr; 
    };
    
 //-----------------------------------------------------------------------------
      GalOpnClose(aVar){
          
        if (aVar==='off'){
           $(this.galaTags).css({'display':'none'});
        };
        
         if (aVar==='on'){
           
           $(this.galaTags).css({'display':'inline-block'}); 
         };     
      };
//------------------------------------------------------------------------------      
     galInit(galFolder, galLFolder){
        this.folderName = galFolder;
        this.folderLName = galLFolder;  
     };
//------------------------------------------------------------------------------    
      calocMinLength(){
        
        
        var bself= this; 
        bself.mimgLength=0;
        bself.imgLarr.length=0;
     
        this.bBuf.map(function(item, i, arr){
  
             bself.imgLarr[i]=document.getElementById('gal-block-img-'+i.toString()).width; 
             bself.mimgLength=bself.mimgLength+bself.imgLarr[i]+(bself.imgMargin*3);
          
        }); 
       this.setStyle();
    };
//------------------------------------------------------------------------------   
      clearStyle(){
           $(this.mLineTag).css({'width':'0px'});
      };
//------------------------------------------------------------------------------
     selectActivatemin(){
         
     };       
//------------------------------------------------------------------------------     
      setStyle(){
           $(this.mLineTag).css({'width':this.mimgLength+'px'});
      };
//-----------------------------------------------------------------------------      
      setLine(index){
         var linePosition=0;
          
          for (var i=0;i<=index; i++ ){
             linePosition=(linePosition+(this.imgLarr[i]-1));
          };
          
          if (index===0){
             $(this.mLineTag).animate({left:'0px'}, 2000);   
          }else{
          $(this.mLineTag).animate({left:'-'+linePosition+'px'}, 2000);  
            };
      };
//------------------------------------------------------------------------------     
      mbtnClick(btnName){
        if(btnName==='rbtn'){
            if (this.btnClickIndex< this.imgLarr.length-1){
                this.btnClickIndex++;
            };
        };
        
        if(btnName==='lbtn'){
           if (this.btnClickIndex>=1) {
               this.btnClickIndex--; 
        };    
      };
       
       this.setLine(this.btnClickIndex);
        
    };
   //-------------------------------------------------------------------- 
    
    mbtnImgClick(btnName){
          
      
        if(btnName==='rbtn'){
            if (this.btnClickIndex< this.imgLarr.length-1){
                this.btnClickIndex++;
            };
        };
        
        if(btnName==='lbtn'){
           if (this.btnClickIndex>=1) {
               this.btnClickIndex--;                  
        };    
      };
         this.imgBuf=this.btnClickIndex;
       this.setLine(this.btnClickIndex);
    };
   //-------------------------------------------------------------------- 
    
   
    SendAjax() {
        var self = this;
       
        (function ($) {
            $.ajax({
                type: "post",
                url: 'action/fgal.php',
                data: {in_galfolder: self.folderN, in_galLfolder: self.folderLN
                }
            }).done(function (result){
             self.bBuf.length=0;
             self.bBufMax.length=0;
             self.btnClickIndex=0;
             self.jsonOb.length=0;
             self.jsonOb =JSON.parse(result);
        
                for(let k in self.jsonOb[1]) {
                    let v = self.jsonOb[1][k];
                      self.bBuf.push(v);
                };  
               
                for(let k in self.jsonOb[0]) {
                    let v = self.jsonOb[0][k];
                      self.bBufMax.push(v);
                };  
                 
                self.bImg=self.bBufMax[0];
                
            });
        })(jQuery);
    };
//------------------------------------------------------------------------------
    gaLonClick(galInd){
        

       if (galInd===1){
             this.galInit("../img/gal/374","img/gal/374");
             this.SendAjax();  
       };
       
       if (galInd===2){
             this.galInit("../img/gal/585","img/gal/585");
             this.SendAjax();    
            
       };
       
       if (galInd===3){
             this.galInit("../img/gal/ed","img/gal/ed");
             this.SendAjax();    
       }; 
       if (galInd===4){
             this.galInit("../img/gal/ep","img/gal/ep");
             this.SendAjax();    
       }; 
       if (galInd===5){
             this.galInit("../img/gal/tef","img/gal/tef");
             this.SendAjax();    
       }; 
       if (galInd===6){
             this.galInit("../img/ira/work","img/ira/work");
             this.SendAjax();    
       }; 
        if (galInd===7){
             this.galInit("../img/mk/3ea","img/mk/3ea");
             this.SendAjax();    
       }; 
        if (galInd===8){
             this.galInit("../img/mk/mk","img/mk/mk");
             this.SendAjax();    
       }; 
        this.btnClickIndex=0;
       this.setLine(this.btnClickIndex);
       this.GalOpnClose("on");
       
       
    };
};



var aGaler = new gallControl("#gal-block-mini-wrap-line-1","#gal-block-1");

 $(document).ready(function () {
       
       
     }       
 );
 