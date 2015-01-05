function tryLogin() {
	if (formLogin.isValid()) {
		Ext.Msg.alert('Hey How!', "Let's Go!");
	}
}

var formLogin = Ext.create('Ext.form.Panel', {
	url : 'nada.php',
	xtype : 'login-form',
	region : 'center',
	title : 'Login',
	waitMsgTarget : true,
	frame : true,
	width : 320,
	bodyPadding : 10,
	defaultType : 'textfield',
	defaults : {
		anchor : '100%'
	},
	items : [ {
		allowBlank : false,
		fieldLabel : 'Usuário',
		name : 'user',
		emptyText : 'usuario.sobrenome'
	}, {
		allowBlank : false,
		fieldLabel : 'Senha',
		name : 'passwd',
		emptyText : 'segredo',
		inputType : 'password'
	} ],
	buttons : [ {
		text : 'Login',
		id : 'btnLogin',
		handler : tryLogin
	} ]
});

Ext.onReady(function() {
	formLogin.render(Ext.getBody());
	formLogin.center();
});
