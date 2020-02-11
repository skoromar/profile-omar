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
						education_short:"Formación",
						objetive:"Objetivo:",
						get_cv:"Obtener CV",
						language: "Lenguaje",
						file:"OmarOrtiz.pdf",
						education_school:"Ingeniería en sistemas computacionales"
					}
					,objetive:"Pertenecer a una institución sólida y de confianza dentro del área de tecnologías de información en la cual me pueda desarrollar profesional y personalmente, adaptándome al trabajo con plena disposición para aprender y poner en práctica mis conocimientos adquiridos en beneficio de la organización."
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

					titles:{
						experience:"Experience",
						about:"About me",
						contact:"Contact",
						education:"Education and Certifications",
						education_short:"Education",
						objetive:"Objetive:",
						get_cv:"Get Resume",
						language:"Language",
						file:"OmarOrtizResume2020.pdf",
						education_school:"Computerstystems Engineer"
					}
					,objetive:"Belonging to a solid and trustworthy institution within the area of ​​information technologies in which I can develop professionally and personally, adapting work with full willingness to learn and put into practice my knowledge acquired for the benefit of the organization."
					,jobs:[
						{
							title:"Full Stack Developer Netsuite / OFI.COM",
							date_start:"2017",
							date_end:"Current",
							description:"Architecture and development of new modules and integrations for the company's processes adapting the Netsuite CRM and e-commerce to improve service quality. Using Netsuite programming tools as well as Javascript, Backbone, NODE, Express, MongoDB, Amazon Web Services, Gulp, Code Commit, MySql and GIT."
						}
						,{
							title:"Analyst developer / Ahorra seguros ",
							date_start:"2016",
							date_end:"2017",
							description:"E-commerce systems analysis development and design managers in the vehicle insurance sector integrating information providers implemented in Java, Hibernate, JSF Prime Faces, Mysql."
						}
						,{
							title:"Developer IT / DGI Autosystems",
							date_start:"2015",
							date_end:"2016",
							description:"Update and optimization of the internal ERP, adapting it to the needs of each area to improve user interaction and processes with the system implemented in PHP, Mysql, HTML, CSS, Javascript."
						}
						,{
							title:"Web Developer / Regenersis México  ",
							date_start:"2015",
							date_end:"2015",
							description:"Development of the design and implementation of a project for internal inventory management, implemented in PHP, Mysql, HTML, CSS, Javascript."
						}
						,{
							title:"Programmer / Benkio Comunicaciones ",
							date_start:"2014",
							date_end:"2015",
							description:"Development of e-commerce and mobile applications implemented in PHP, Mysql, HTML, CSS, Javascript, Java, Android, Phonegap and SQLite."
						}
					]
				}
			}[option]
			return information_language;
		}	


		,print_job: function(option){
			var information_profile = this.config_lang(option);
			var html_job = "";
			for(var x in information_profile.jobs){
			   var date_end = "";
			   html_job += '<div class="w3-container w3-white w3-animate-zoom">'
			   				+'<h5 class="w3-opacity"><b>'+information_profile.jobs[x].title+' </b></h5>'
	  						+'<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>'+information_profile.jobs[x].date_start+' - '+(information_profile.jobs[x].date_end=='Actual'?'<span class="w3-tag w3-teal w3-round">Actual</span></h6>':information_profile.jobs[x].date_end+'</h6>')
							+'<p>'+information_profile.jobs[x].description+'</p>'
							+(x == information_profile.jobs.length-1?'<br>':'<hr>')
							+'</div>';
			}

			return html_job;
			
		}
		, set_lang: function(option){
			var html = translate().print_job(option);
			var info_diccionary_arr = translate().config_lang(option);
			var titles = info_diccionary_arr.titles;
			var objetive = info_diccionary_arr.objetive;
			$('#job-information').html(html);


			$('.experience-title').html(titles.experience);
			$('.about-title').html(titles.about);
			$('.contact-title').html(titles.contact);
			$('.education-title').html(titles.education);
			$('.education-title-short').html(titles.education_short);
			$('.objetive').html(titles.objetive);
			$('.objetive-information').html(objetive);
			$('.cv-file').html(titles.get_cv);
			$('.language').html(titles.language);
			$("#resume-pdf").attr("href", titles.file);
			$(".education_school").html(titles.education_school);
		}


	}
};
