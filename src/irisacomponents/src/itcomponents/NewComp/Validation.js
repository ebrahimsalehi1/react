import validator from 'validator'
import moment from 'jalali-moment'

function validation(text, validationType, validationTypeParam) {
  //console.log(`${text} - ${validationType} - ${validationTypeParam}`)

  if (typeof validationType === 'undefined' || validationType === null)
    return true

<<<<<<< HEAD
    if(typeof validationType==='undefined' || validationType===null)
        return true

    let result = {isValid:false,messages:{validationType:[],validationMessage:[]}}

    for (let i = 0; i < validationType.length; i++) {
        result.isValid = true;
        let msg = "";

        switch (validationType[i]) {
            case "afterDate": {
                let targetDate = validationTypeParam ? parseInt(validationTypeParam[i]) : new Date().getTime();
                let displayDate = moment(new Date(targetDate)).locale('fa').format('YYYY/MM/DD HH:mm:ss');

                result.isValid = (!isNaN(text) ? parseInt(text) : text) >= targetDate;
                msg = "زمان حداقل: " + displayDate;

                result.messages.validationType = [...result.messages.validationType,validationType[i]]
                result.messages.validationMessage = [...result.messages.validationMessage,msg]

                break;
            }

            case "alpha": {
                result.isValid =  validator.isAlpha(text, 'en-US');
                msg = "کاراکترهای مجاز: حروف لاتین";

                result.messages.validationType = [...result.messages.validationType,validationType[i]]
                result.messages.validationMessage = [...result.messages.validationMessage,msg]

                break;
            }

            case "alphaFa": {
                let regEx = /^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیي]+[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیي ]*$/;
                result.isValid =  validator.matches(validator.rtrim(text), regEx);
                msg = "کاراکترهای مجاز: حروف فارسی و فاصله";

                result.messages.validationType = [...result.messages.validationType,validationType[i]]
                result.messages.validationMessage = [...result.messages.validationMessage,msg]

                break;
            }

            case "alphanumeric": {
                result.isValid =  validator.isAlphanumeric(text, 'en-US');
                msg = "کاراکترهای مجاز: حروف لاتین و عدد";

                result.messages.validationType = [...result.messages.validationType,validationType[i]]
                result.messages.validationMessage = [...result.messages.validationMessage,msg]

                break;
            }

            case "alphanumericFa": {
                let regEx = /^[٠١٢٣٤٥٦٧٨٩0-9آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیي]+[٠١٢٣٤٥٦٧٨٩0-9آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیي ]*$/;
                result.isValid =  validator.matches(validator.rtrim(text), regEx);
                msg = "کاراکترهای مجاز: حروف فارسی، فاصله و عدد";

                result.messages.validationType = [...result.messages.validationType,validationType[i]]
                result.messages.validationMessage = [...result.messages.validationMessage,msg]

                break;
            }

            case "equals": {
                if (validationTypeParam && validationTypeParam[i]) {
                    result.isValid =  validator.equals(text, validationTypeParam[i]);
                    msg = "مقادیر مساوی نمی باشند";
                }

                result.messages.validationType = [...result.messages.validationType,validationType[i]]
                result.messages.validationMessage = [...result.messages.validationMessage,msg]

                break;
            }

            case "email": {
                result.isValid =  validator.isEmail(text);
                msg = "ایمیل معتبر نمی باشد";
 
                result.messages.validationType = [...result.messages.validationType,validationType[i]]
                result.messages.validationMessage = [...result.messages.validationMessage,msg]

                break;
            }

            case "lowercase": {
                result.isValid =  validator.isLowercase(text);
                msg = "کاراکترهای مجاز: حروف لاتین کوچک";

                result.messages.validationType = [...result.messages.validationType,validationType[i]]
                result.messages.validationMessage = [...result.messages.validationMessage,msg]
                
                break;
            }

            case "matches": {
                if (validationTypeParam && validationTypeParam[i]) {
                    result.isValid =  validator.matches(text, validationTypeParam[i]);
                    msg = "ورودی با عبارت منطقی مطابقت ندارد";
                }

                result.messages.validationType = [...result.messages.validationType,validationType[i]]
                result.messages.validationMessage = [...result.messages.validationMessage,msg]

                break;
            }

            case "mobilePhone": {
                result.isValid =  validator.isMobilePhone(text, 'fa-IR');
                msg = "لطفا شماره موبایل وارد نمایید";

                result.messages.validationType = [...result.messages.validationType,validationType[i]]
                result.messages.validationMessage = [...result.messages.validationMessage,msg]

                break;
            }

            case "number": {
                result.isValid =  validator.isNumeric(text);
                msg = "لطفا عدد وارد نمایید";

                result.messages.validationType = [...result.messages.validationType,validationType[i]]
                result.messages.validationMessage = [...result.messages.validationMessage,msg]

                break;
            }

            case "numberFloat": {
                if (validationTypeParam && validationTypeParam[i]) {
                    result.isValid =  validator.isFloat(text, validationTypeParam[i]);

                    msg = `لطفا عدد اعشاری وارد نمایید\n`;
                    msg += validationTypeParam[i].min
                        ? `بزرگ تر یا مساوی: ${validationTypeParam[i].min}\n` : ``;
                    msg += validationTypeParam[i].max
                        ? `کوچک تر یا مساوی: ${validationTypeParam[i].max}\n` : ``;
                    msg += validationTypeParam[i].gt
                        ? `بزرگ تر از: ${validationTypeParam[i].gt}\n` : ``;
                    msg += validationTypeParam[i].lt
                        ? `کوچک تر از: ${validationTypeParam[i].lt}\n` : ``;
                } else {
                    result.isValid = validator.isFloat(text);
                    msg = `لطفا عدد اعشاری وارد نمایید\n`;
                }

                result.messages.validationType = [...result.messages.validationType,validationType[i]]
                result.messages.validationMessage = [...result.messages.validationMessage,msg]

                break;
            }

            case "numberInt": {
                if (validationTypeParam && validationTypeParam[i]) {
                    result.isValid =  validator.isInt(text, validationTypeParam[i]);

                    msg = `لطفا عدد صحیح وارد نمایید\n`;
                    msg += validationTypeParam[i].min
                        ? `بزرگ تر یا مساوی: ${validationTypeParam[i].min}\n` : ``;
                    msg += validationTypeParam[i].max
                        ? `کوچک تر یا مساوی: ${validationTypeParam[i].max}\n` : ``;
                    msg += validationTypeParam[i].gt
                        ? `بزرگ تر از: ${validationTypeParam[i].gt}\n` : ``;
                    msg += validationTypeParam[i].lt
                        ? `کوچک تر از: ${validationTypeParam[i].lt}\n` : ``;
                } else {
                    result.isValid =  validator.isInt(text);
                    msg = `لطفا عدد صحیح وارد نمایید\n`;
                }

                result.messages.validationType = [...result.messages.validationType,validationType[i]]
                result.messages.validationMessage = [...result.messages.validationMessage,msg]

                break;
            }

            case "required": {
                result.isValid =  !validator.isEmpty(text);
                msg = "مقدار فیلد اجباری می باشد";

                result.messages.validationType = [...result.messages.validationType,validationType[i]]
                result.messages.validationMessage = [...result.messages.validationMessage,msg]

                break;
            }

            case "uppercase": {
                result.isValid =  validator.isUppercase(text);
                msg = "کاراکترهای مجاز: حروف لاتین بزرگ";

                result.messages.validationType = [...result.messages.validationType,validationType[i]]
                result.messages.validationMessage = [...result.messages.validationMessage,msg]

                break;
            }

            default: {
                result.isValid = true;
            }
        }//switch end



    }//for end

    //{isValid:false,messages:{validationType:[],validationParams:[]}}

    return {isValid:result.isValid,
        messages:result.messages && result.messages.validationMessage ? result.messages.validationMessage.reduce((s,item)=>{return s+item+'\n'},''):''
    }
};
=======
  let result = {
    isValid: true,
    messages: { validationType: [], validationMessage: [] }
  }

  for (let i = 0; i < validationType.length; i++) {
    let msg = ''
    let validity = true

    switch (validationType[i]) {
      case 'afterDate': {
        let targetDate = validationTypeParam
          ? parseInt(validationTypeParam[i])
          : new Date().getTime()
        let displayDate = moment(new Date(targetDate))
          .locale('fa')
          .format('YYYY/MM/DD HH:mm:ss')

        validity = (!isNaN(text) ? parseInt(text) : text) >= targetDate
        msg = 'زمان حداقل: ' + displayDate

        break
      }

      case 'alpha': {
        validity = validator.isAlpha(text, 'en-US')
        msg = 'کاراکترهای مجاز: حروف لاتین'

        break
      }

      case 'alphaFa': {
        let regEx = /^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیي]+[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیي ]*$/
        validity = validator.matches(validator.rtrim(text), regEx)
        msg = 'کاراکترهای مجاز: حروف فارسی و فاصله'

        break
      }

      case 'alphanumeric': {
        validity = validator.isAlphanumeric(text, 'en-US')
        msg = 'کاراکترهای مجاز: حروف لاتین و عدد'

        break
      }

      case 'alphanumericFa': {
        let regEx = /^[٠١٢٣٤٥٦٧٨٩0-9آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیي]+[٠١٢٣٤٥٦٧٨٩0-9آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیي ]*$/
        validity = validator.matches(validator.rtrim(text), regEx)
        msg = 'کاراکترهای مجاز: حروف فارسی، فاصله و عدد'

        break
      }

      case 'equals': {
        if (validationTypeParam && validationTypeParam[i]) {
          validity = validator.equals(text, validationTypeParam[i])
          msg = 'مقادیر مساوی نمی باشند'
        }

        break
      }

      case 'email': {
        validity = validator.isEmail(text)
        msg = 'ایمیل معتبر نمی باشد'

        break
      }

      case 'lowercase': {
        validity = validator.isLowercase(text)
        msg = 'کاراکترهای مجاز: حروف لاتین کوچک'

        break
      }

      case 'matches': {
        if (validationTypeParam && validationTypeParam[i]) {
          validity = validator.matches(text, validationTypeParam[i])
          msg = 'ورودی با عبارت منطقی مطابقت ندارد'
        }

        break
      }

      case 'mobilePhone': {
        validity = validator.isMobilePhone(text, 'fa-IR')
        msg = 'لطفا شماره موبایل وارد نمایید'

        break
      }

      case 'number': {
        validity = validator.isNumeric(text)
        msg = 'لطفا عدد وارد نمایید'

        break
      }

      case 'numberFloat': {
        if (validationTypeParam && validationTypeParam[i]) {
          validity = validator.isFloat(text, validationTypeParam[i])
          msg = `لطفا عدد اعشاری وارد نمایید\n`
          msg += validationTypeParam[i].min
            ? `بزرگ تر یا مساوی: ${validationTypeParam[i].min}\n`
            : ``
          msg += validationTypeParam[i].max
            ? `کوچک تر یا مساوی: ${validationTypeParam[i].max}\n`
            : ``
          msg += validationTypeParam[i].gt
            ? `بزرگ تر از: ${validationTypeParam[i].gt}\n`
            : ``
          msg += validationTypeParam[i].lt
            ? `کوچک تر از: ${validationTypeParam[i].lt}\n`
            : ``
        } else {
          validity = validator.isFloat(text)
          msg = `لطفا عدد اعشاری وارد نمایید\n`
        }

        break
      }

      case 'numberInt': {
        if (validationTypeParam && validationTypeParam[i]) {
          validity = validator.isInt(text, validationTypeParam[i])

          msg = `لطفا عدد صحیح وارد نمایید\n`
          msg += validationTypeParam[i].min
            ? `بزرگ تر یا مساوی: ${validationTypeParam[i].min}\n`
            : ``
          msg += validationTypeParam[i].max
            ? `کوچک تر یا مساوی: ${validationTypeParam[i].max}\n`
            : ``
          msg += validationTypeParam[i].gt
            ? `بزرگ تر از: ${validationTypeParam[i].gt}\n`
            : ``
          msg += validationTypeParam[i].lt
            ? `کوچک تر از: ${validationTypeParam[i].lt}\n`
            : ``
        } else {
          result.isValid = validator.isInt(text)
          msg = `لطفا عدد صحیح وارد نمایید\n`
        }

        break
      }

      case 'required': {
        validity = !validator.isEmpty(text)
        msg = 'مقدار فیلد اجباری می باشد'

        break
      }

      case 'uppercase': {
        validity = validator.isUppercase(text)
        msg = 'کاراکترهای مجاز: حروف لاتین بزرگ'

        break
      }

      default: {
        validity = true
      }
    } //switch end
    result.isValid = result.isValid && validity

    result.messages.validationType = [
      ...result.messages.validationType,
      validationType[i]
    ]

    if (!validity)
      result.messages.validationMessage = [
        ...result.messages.validationMessage,
        '\n' + msg
      ]
  } //for end

  //{isValid:false,messages:{validationType:[],validationParams:[]}}

  return {
    isValid: result.isValid,
    messages: result.messages.validationMessage
  }
}
>>>>>>> ccc6ec3e95aa170f699429e352277724505f8a04

export default validation
