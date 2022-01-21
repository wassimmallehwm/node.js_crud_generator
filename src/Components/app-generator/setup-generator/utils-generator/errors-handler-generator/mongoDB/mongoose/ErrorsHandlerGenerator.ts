import errorshandlerTemplate from './template';

class ErrorsHandlerGenerator {

    static generateErrorsHandler(){
        return errorshandlerTemplate();
    }
}

export default ErrorsHandlerGenerator;