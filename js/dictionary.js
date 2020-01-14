function translate(option) {
	return {
		config_lang: function(option){
			var information_language = {
				spanish:{
					titles:{
						experience:"Experiencia",
						about:"Sobre Mi",
						contact:"Contacto",
						education:"Formación y Certificaciones",
						education_short:"Formación"
					}
					,jobs:[
						{
							title:"Full Stack Developer Netsuite / OFI.COM",
							date_start:"2017",
							date_end:"Actual",
							description:"Arquitectura y desarrollo de nuevos módulos e integraciones para optimizar los procesos de la empresa adaptando el CRM Netsuite y el e-commerce para mejorar la calidad del servicio. Utilizando herramientas de programación de Netsuite así como Javascript, Backbone, NODE, Express, MongoDB, Amazon Web Services, Gulp, Code Commit, MySql y GIT."
						}
						,{
							title:"Analista Desarrollador / Ahorra seguros ",
							date_start:"2016",
							date_end:"2017",
							description:"Análisis y desarrollo de sistemas e-commerce y gestores de diseño, en el sector de seguros vehiculares integrando proveedores de información implementado en Java, Hibernate, JSF Prime Faces, Mysql."
						}
						,{
							title:"Desarrollador IT / DGI Autosystems",
							date_start:"2015",
							date_end:"2016",
							description:"Actualización y optimización del ERP interno, adaptándolo a las necesidades de cada área para mejorar la interacción y los procesos de los usuarios con el sistema implementado en PHP, Mysql, HTML,CSS, Javascript. "
						}
						,{
							title:"Desarrollador Web / Regenersis México  ",
							date_start:"2015",
							date_end:"2015",
							description:"Desarrollo del diseño e implementación de un proyecto para la gestión de inventario interno, implementado en PHP, Mysql, HTML,CSS, Javascript."
						}
						,{
							title:"Programador / Benkio Comunicaciones ",
							date_start:"2014",
							date_end:"2015",
							description:"Desarrollo de e-commerce y aplicaciones móviles  implementados en PHP, Mysql, HTML,CSS, Javascript, Java, Android, Phonegap y SQLite."
						}
					]
				}
				,english:{


				}
			}[option]
			return information_language;
		}	


		,print_job: function(option){
			var information_profile = this.config_lang(option);
			var html_job = "";
			for(var x in information_profile.jobs){
			   var date_end = "";
			   html_job += '<div class="w3-container w3-white">'
			   				+'<h5 class="w3-opacity"><b>'+information_profile.jobs[x].title+' </b></h5>'
	  						+'<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>'+information_profile.jobs[x].date_start+' - '+(information_profile.jobs[x].date_end=='Actual'?'<span class="w3-tag w3-teal w3-round">Actual</span></h6>':information_profile.jobs[x].date_end+'</h6>')
							+'<p>'+information_profile.jobs[x].description+'</p>'
							+(x == information_profile.jobs.length-1?'<br>':'<hr>')
							+'</div>';
			}

			return html_job;
			
		} 


	}
};
