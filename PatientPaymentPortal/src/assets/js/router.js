define(function (require) {
    
    "use strict";

    var $           = require('jquery'),
        _           = require('underscore'),
        Backbone    = require('backbone'),
        ace         = require('ace_elem'),
        WizardView  = require('view/wizard'),
        $self,$that;

    return Backbone.Router.extend({
        
        initialize: function(){
            if(localStorage.getItem('sSessionId')>0){
                $self = this;
                var wizard  =   new WizardView();
                $('body').html(wizard.$el);
                wizard.delegateEvents();
                //this.BindNiceScroll();
            }
            else{
                window.location.hash = 'logout';
            }
        },
 
        routes: {
            ""                          :       "DefaultAction",
            "basicinfo"                 :       "basicinfo",
            "basicinfoedit"             :       "basicinfoe",
            "error"                     :       "Error",
            "logout"                    :       "ReleaseResources",
            "insurance"                 :       "insurance",
            "employerGuarantor"         :       "employerGuarantor", 
            "Payment"                   :       "Payment",
            "Settings"                  :       "Settings",
            "Messages"                  :       "Messages",
            "Appointments"              :       "Appointments",
            "AddAppointment"            :       "AddAppointment",
            "Payment/Confirmation"      :       "PaymentConfirm"
        },
        
       
        
        DefaultAction: function(){
            require(['view/BasicInfo'],function(BasicInfoView){
                var basicinfo  =   new BasicInfoView();
                $('#pageConetnt').html(basicinfo.$el);
                basicinfo.delegateEvents();
                $self.hiddentabForSmallDevice();
            });
        },
         basicinfo: function(){
            require(['view/BasicInfo'],function(BasicInfoView){
                var basicinfo  =   new BasicInfoView();
                
                $('#pageContent').html(basicinfo.$el);
                basicinfo.delegateEvents();
                $self.hiddentabForSmallDevice();
            });
        },
       basicinfoe: function(){
            require(['view/BasicInfoEditableView'],function(BasicInfoEditableView){
                var basicinfoe  =   new BasicInfoEditableView();
                $('#pageContent').html(basicinfoe.$el);
                basicinfoe.delegateEvents();
                $self.hiddentabForSmallDevice();
            });
        },
         insurance: function(){
            require(['view/InsuranceView'],function(InsuranceView){
                var InsuranceView  =   new InsuranceView();
              $('#pageContent').html(InsuranceView.$el);
                InsuranceView.delegateEvents();
                $self.hiddentabForSmallDevice();
            });
        },
          employerGuarantor: function(){
            require(['view/EmployerAndGuarantorBOView'],function(EmployerAndGuarantorBOView){
                var employerAndGuarantorBOView  =   new EmployerAndGuarantorBOView();
              $('#pageContent').html(employerAndGuarantorBOView.$el);
                employerAndGuarantorBOView.delegateEvents();
                $self.hiddentabForSmallDevice();
            });
        },
          Payment: function(){
            require(['view/PatientPaymentView'],function(PatientPaymentView){
                var patientPaymentView  =   new PatientPaymentView.paymentBasicView();
              $('#pageContent').html(patientPaymentView.$el);
                patientPaymentView.delegateEvents();
                $self.hiddentabForSmallDevice();
            });
        },
        Settings:function(){
            require(['view/SettingView'],function(SettingView){
                var settingView  =   new SettingView();
              $('#pageContent').html(settingView.$el);
                settingView.delegateEvents();
                $self.hiddentabForSmallDevice();
            });  
        },
        
        Messages: function(){
            require(['view/messages/TaskView'],function(TaskView){
                var taskView  =   new TaskView.taskBasicView();
              $('#pageContent').html(taskView.$el);
                taskView.delegateEvents();
                $self.hiddentabForSmallDevice();
            });
        },
        
        Appointments: function(){
            require(['view/appointment/appointments'],function(Appointment){
                var apntmnt = new Appointment();
                $('#pageContent').html(apntmnt.$el);
                $self.hiddentabForSmallDevice();
            });
        },
        AddAppointment:function(){
         require(['view/appointment/SearchAppointmentView'],function(SearchAppointmentView){
                var apntmnt = new SearchAppointmentView();
                $('#pageContent').html(apntmnt.$el);
                $self.hiddentabForSmallDevice();
            });   
        },
        Error: function(){
          // alert("error occured")
            this.ReleaseResources();
           
        },
        
        Logout: function(){
            this.Logout = new models.DashboardData({id:'logout'});
            $that=this;
            this.Logout.fetch({type:"POST",cache:false,Accept:'application/json',
                success:function(result,textStatus, xh){
                    window.history.forward();
                    $that.ReleaseResources();
                    window.onload=window.history.forward();
                    window.onpageshow=function(evt){if(evt.persisted)noBack();};
                    window.onunload=function(){void(0);};
                    Backbone.history.stop();
                    window.location = directory.loginUrl;
                },
                error:function(response){
                    console.log(response);
                }
            });
        },
        
        ReleaseResources: function(){
            localStorage.removeItem("SessionId");
            var clinicid=localStorage.getItem("ClinicId");
             localStorage.removeItem("ClinicId");
             localStorage.removeItem("iUserId");
             localStorage.removeItem("sCliniName"); 
             localStorage.removeItem("sCliniName");
             localStorage.removeItem("sCliniName"); 
             localStorage.removeItem("sCliniName");
             localStorage.removeItem("blEnablePayment"); 
             localStorage.removeItem("blEnableAppointment");
             localStorage.removeItem("blEnableInsurance"); 
             localStorage.removeItem("PatientFullName");
             localStorage.removeItem("MRN");
             localStorage.clear();
            window.location='Login.html?'+clinicid;
        },
        hiddentabForSmallDevice:function(){
           $('#sidebar').removeClass('display');
        },
        
        PaymentConfirm1: function(){
            
             require(['view/PaymentConfirmation'],function(PatientPaymentConfirm){
                var patientPaymentConfirm  =   new PatientPaymentConfirm.PaymentConfirmView();
                $('#pageContent').html(patientPaymentConfirm.$el);
                patientPaymentConfirm.delegateEvents();
                $self.hiddentabForSmallDevice();
            });
        }
    });

});