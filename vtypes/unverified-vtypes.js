Ext.form.VTypes["hostnameVal1"] = /^[a-zA-Z][-.a-zA-Z0-9]{0,254}$/;  
Ext.form.VTypes["hostnameVal2"] = /^[a-zA-Z]([-a-zA-Z0-9]{0,61}[a-zA-Z0-9]){0,1}([.][a-zA-Z]([-a-zA-Z0-9]{0,61}[a-zA-Z0-9]){0,1}){0,}$/;  
Ext.form.VTypes["ipVal"] = /^([1-9][0-9]{0,1}|1[013-9][0-9]|12[0-689]|2[01][0-9]|22[0-3])([.]([1-9]{0,1}[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])){2}[.]([1-9][0-9]{0,1}|1[0-9]{2}|2[0-4][0-9]|25[0-4])$/;  

	
Ext.form.VTypes["netmaskVal"] = /(^(128|192|224|24[08]|25[245])\.0\.0\.0$)|(^255\.(0|128|192|224|24[08]|25[245])\.0\.0$)|(^255\.255\.(0|128|192|224|24[08]|25[245])\.0$)|(^255\.255\.255\.(0|128|192|224|24[08]|252)$)/;  
Ext.form.VTypes["portVal"] = /^(0|[1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/;  
Ext.form.VTypes["multicastVal"] = /^((22[5-9]|23[0-9])([.](0|[1-9][0-9]{0,1}|1[0-9]{2}|2[0-4][0-9]|25[0-5])){3})|(224[.]([1-9][0-9]{0,1}|1[0-9]{2}|2[0-4][0-9]|25[0-5])([.](0|[1-9][0-9]{0,1}|1[0-9]{2}|2[0-4][0-9]|25[0-5])){2})|(224[.]0[.]([1-9][0-9]{0,1}|1[0-9]{2}|2[0-4][0-9]|25[0-5])([.](0|[1-9][0-9]{0,1}|1[0-9]{2}|2[0-4][0-9]|25[0-5])))$/;  
Ext.form.VTypes["usernameVal"] = /^[a-zA-Z][-_.a-zA-Z0-9]{0,30}$/;  
Ext.form.VTypes["passwordVal1"] = /^.{6,31}$/;  
Ext.form.VTypes["passwordVal2"] = /[^a-zA-Z].*[^a-zA-Z]/;  
Ext.form.VTypes["hostname"]=function(v){  
 if(!Ext.form.VTypes["hostnameVal1"].test(v)){  
  Ext.form.VTypes["hostnameText"]="Must begin with a letter and not exceed 255 characters"  
  return false;  
 }  
 Ext.form.VTypes["hostnameText"]="L[.L][.L][.L][...] where L begins with a letter, ends with a letter or number, and does not exceed 63 characters";  
 return Ext.form.VTypes["hostnameVal2"].test(v);  
}  
Ext.form.VTypes["hostnameText"]="Invalid Hostname"  
Ext.form.VTypes["hostnameMask"]=/[-.a-zA-Z0-9]/;  
Ext.form.VTypes["ip"]=function(v){  
 return Ext.form.VTypes["ipVal"].test(v);  
}  
Ext.form.VTypes["ipText"]="1.0.0.1 - 223.255.255.254 excluding 127.x.x.x"  
Ext.form.VTypes["ipMask"]=/[.0-9]/;  
Ext.form.VTypes["netmask"]=function(v){  
 return Ext.form.VTypes["netmaskVal"].test(v);  
}  
Ext.form.VTypes["netmaskText"]="128.0.0.0 - 255.255.255.252"  
Ext.form.VTypes["netmaskMask"]=/[.0-9]/;  
Ext.form.VTypes["port"]=function(v){  
 return Ext.form.VTypes["portVal"].test(v);  
}  
Ext.form.VTypes["portText"]="0 - 65535"  
Ext.form.VTypes["portMask"]=/[0-9]/;  
Ext.form.VTypes["multicast"]=function(v){  
 return Ext.form.VTypes["multicastVal"].test(v);  
}  
Ext.form.VTypes["multicastText"]="224.0.1.0 - 239.255.255.255"  
Ext.form.VTypes["multicastMask"]=/[.0-9]/;  
Ext.form.VTypes["username"]=function(v){  
 return Ext.form.VTypes["usernameVal"].test(v);  
}  
Ext.form.VTypes["usernameText"]="Username must begin with a letter and cannot exceed 255 characters"  
Ext.form.VTypes["usernameMask"]=/[-_.a-zA-Z0-9]/;  
Ext.form.VTypes["password"]=function(v){  
 if(!Ext.form.VTypes["passwordVal1"].test(v)){  
  Ext.form.VTypes["passwordText"]="Password length must be 6 to 31 characters long";  
  return false;  
 }  
 Ext.form.VTypes["passwordText"]="Password must include atleast 2 numbers or symbols";  
 return Ext.form.VTypes["passwordVal2"].test(v);  
}  
Ext.form.VTypes["passwordText"]="Invalid Password"  
Ext.form.VTypes["passwordMask"]=/./;  
  
Ext.form.VTypes["phone"] = /^(\d{3}[-]?){1,2}(\d{4})$/;  
Ext.form.VTypes["phoneMask"] = /[\d-]/;  
Ext.form.VTypes["phoneText"] = 'Not a valid phone number.  Must be in the format 123-4567 or 123-456-7890 (dashes optional)';  
  
Ext.form.VTypes["phoneVal"] = /^(d{3}[-]?){1,2}(d{4})$/; Ext.form.VTypes["phoneMask"] = /[d-]/;  
Ext.form.VTypes["phoneText"] = 'Not a valid phone number. Must be in the format 123-4567 or 123-456-7890 (dashes optional)';  
  
Ext.form.VTypes["phone"]=function(v){ return Ext.form.VTypes["phoneVal"].test(v); }  
  
Ext.form.VTypes["dollar"] = /^[\$]?[\d]*(.[\d]{2})?$/;  
Ext.form.VTypes["dollarMask"] = /[\d\$.]/;  
Ext.form.VTypes["dollarText"] = 'Not a valid dollar amount.  Must be in the format "$123.45" ($ symbol and cents optional).';  
  
Ext.form.VTypes["time"] = /^([1-9]|1[0-9]):([0-5][0-9])(\s[a|p]m)$/i;  
Ext.form.VTypes["timeMask"] = /[\d\s:amp]/i;  
Ext.form.VTypes["timeText"] = 'Not a valid time.  Must be in the format "12:34 PM".';  
  
Ext.apply(Ext.form.VTypes,   
    {'phone': function()  
        {  
            var re = /^(d{3}[-]?){1,2}(d{4})$/;  
            return function(v) {  
                    return re.test(v);  
                }  
        }(),   
        'phoneText' : 'The format is wrong, ie: 123-456-7890 (dashes optional)'  
});  
  
Ext.apply(Ext.form.VTypes, {  
    'date': function(){  
        /************************************************ 
        DESCRIPTION: Validates that a string contains only 
            valid dates with 2 digit month, 2 digit day, 
            4 digit year. Date separator can be ., -, or /. 
            Uses combination of regular expressions and 
            string parsing to validate date. 
            Ex. mm/dd/yyyy or mm-dd-yyyy or mm.dd.yyyy 
 
        PARAMETERS: 
           strValue - String to be tested for validity 
 
        RETURNS: 
           True if valid, otherwise false. 
 
        REMARKS: 
           Avoids some of the limitations of the Date.parse() 
           method such as the date separator character. 
        *************************************************/  
          var objRegExp = /^\d{1,2}(\-|\/|\.)\d{1,2}\1\d{4}$/;  
          return function(strValue){  
              //check to see if in correct format  
              if(!objRegExp.test(strValue))  
                return false; //doesn't match pattern, bad date  
              else{  
                var strSeparator = strValue.substring(2,3)   
                var arrayDate = strValue.split(strSeparator);   
                //create a lookup for months not equal to Feb.  
                var arrayLookup = { '01' : 31,'03' : 31,   
                                    '04' : 30,'05' : 31,  
                                    '06' : 30,'07' : 31,  
                                    '08' : 31,'09' : 30,  
                                    '10' : 31,'11' : 30,'12' : 31}  
                var intDay = parseInt(arrayDate[1],10);   
  
                //check if month value and day value agree  
                if(arrayLookup[arrayDate[0]] != null) {  
                  if(intDay <= arrayLookup[arrayDate[0]] && intDay != 0)  
                    return true; //found in lookup table, good date  
                }  
                  
                //check for February (bugfix 20050322)  
                //bugfix  for parseInt kevin  
                //bugfix  biss year  O.Jp Voutat  
                var intMonth = parseInt(arrayDate[0],10);  
                if (intMonth == 2) {   
                   var intYear = parseInt(arrayDate[2]);  
                   if (intDay > 0 && intDay < 29) {  
                       return true;  
                   }  
                   else if (intDay == 29) {  
                     if ((intYear % 4 == 0) && (intYear % 100 != 0) ||   
                         (intYear % 400 == 0)) {  
                          // year div by 4 and ((not div by 100) or div by 400) ->ok  
                         return true;  
                     }     
                   }  
                }  
              }    
              return false; //any other values, bad date  
        }  
    }(),  
    'dateText' : 'The format is wrong, ie: 01/01/2007 | 01.01.2007 | 01-01-2007'  
});  
  
//** Number ex. 12.00 or 23.00 or 22.30 **//  
Ext.apply(Ext.form.VTypes, {  
    'numeric': function(){  
          
            /***************************************************************** 
            DESCRIPTION: Validates that a string contains only valid numbers. 
            PARAMETERS: 
               strValue - String to be tested for validity 
            RETURNS: 
               True if valid, otherwise false. 
            ******************************************************************/  
              var objRegExp  =  /(^-?\d\d*\.\d*$)|(^-?\d\d*$)|(^-?\.\d\d*$)/;  
              return function(strValue){  
                  //check for numeric characters  
                  return objRegExp.test(strValue);  
              }  
    }(),  
    'numericText': 'Only numbers are allowed'  
});  
  
/* Matches Win and Mac OS paths: x:\foo\bar\, \\foo\bar\, /foo/bar/ */  
Ext.form.VTypes["directory"]=function(v){  
 return /^(([a-zA-Z]:){0,1}(\\|\/){1})(([-_.a-zA-Z0-9\\\/ ]+)(\\|\/){1})+$/.test(v);  
}   
Ext.form.VTypes["directoryText"]="This must be a valid directory location."  
Ext.form.VTypes["directoryMask"]=/[-_.a-zA-Z0-9\\\/: ]/;  
  
  
Ext.apply(Ext.form.VTypes, {  
    'ssn': function(){  
            var re = /^([0-6]\d{2}|7[0-6]\d|77[0-2])([ \-]?)(\d{2})\2(\d{4})$/;  
            return function(v){  
                return re.test(v);  
            }  
    }(),  
    'ssnText' : 'SSN format: xxx-xx-xxxx'  
});  
  
Ext.apply(Ext.form.VTypes, {  
    'imagefile': function(){  
        return function(v){  
            v = v.replace(/^\s|\s$/g, ""); //trims string  
            if (v.match(/([^\/\\]+)\.(bmp|gif|png|jpg|jpeg)$/i) )  
                return true;  
            else  
                return false;  
        }  
    }(),  
    'imagefileText' : 'Must be a valid image file: GIF, JPG, BMP, PNG'  
});  
Ext.apply(Ext.form.VTypes,{ 
    'multiipText': "Not a valid IP Address. 1.0.0.0 - 223.255.255.254 excluding 127.x.x.x", 
    'multiipMask': /[.,0-9\s]/, 
    'multiipRe': /^(([1-9][0-9]{0,1}|1[013-9][0-9]|12[0-689]|2[01][0-9]|22[0-3])([.]([1-9]{0,1}[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])){2}[.]([1-9]{0,1}[0-9]{0,1}|1[0-9]{2}|2[0-4][0-9]|25[0-4])([,]\s)?)+$/, 
    'multiip': function (v) {
        return this.multiipRe.test(v); 
    }
});  

// also check out : http://regexlib.com/DisplayPatterns.aspx?cattabindex=6&categoryId=7&AspxAutoDetectCookieSupport=1