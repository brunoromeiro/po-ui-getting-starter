import { Component, OnInit } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styles: [
  ]
})
export class SimpleComponent implements OnInit {

  constructor() { }
  items: Array<any> = [
    {
      "name": "Harriet T. Case",
      "email": "lacinia@Sedauctor.ca",
      "city": "Atlanta",
      "company": "Quisque Imperdiet Consulting",
      "date": "2021-02-04 01:28:38",
      "budget": "68.88"
    },
    {
      "name": "Len A. Wilcox",
      "email": "sit.amet@Aliquam.ca",
      "city": "Rhisnes",
      "company": "Enim Diam Vel LLP",
      "date": "2022-04-26 01:59:29",
      "budget": "74.61"
    },
    {
      "name": "Miranda N. Lucas",
      "email": "egestas@semperegestasurna.co.uk",
      "city": "Kech",
      "company": "Orci In Corporation",
      "date": "2021-08-31 13:23:14",
      "budget": "57.14"
    },
    {
      "name": "Hu S. Dejesus",
      "email": "Aliquam.nec@commodo.org",
      "city": "Warspite",
      "company": "Risus Foundation",
      "date": "2021-10-27 08:56:19",
      "budget": "72.44"
    },
    {
      "name": "Camden U. Prince",
      "email": "dolor.Quisque@pede.edu",
      "city": "Keswick",
      "company": "Cras Institute",
      "date": "2021-05-13 07:40:55",
      "budget": "68.60"
    },
    {
      "name": "Michelle I. Haynes",
      "email": "Proin.nisl.sem@atpretium.edu",
      "city": "Rotheux-RimiŽre",
      "company": "Sed Diam Lorem Institute",
      "date": "2021-01-05 04:27:46",
      "budget": "10.63"
    },
    {
      "name": "Orli H. Parsons",
      "email": "neque@CraspellentesqueSed.edu",
      "city": "Burlington",
      "company": "Vulputate Nisi Sem Foundation",
      "date": "2021-08-23 18:33:56",
      "budget": "38.85"
    },
    {
      "name": "Demetrius O. Bolton",
      "email": "orci@Utsemper.net",
      "city": "San Giovanni in Galdo",
      "company": "Ac Tellus Limited",
      "date": "2021-01-16 16:20:10",
      "budget": "71.97"
    },
    {
      "name": "Jesse I. Bryant",
      "email": "Donec@aliquet.com",
      "city": "Chantemelle",
      "company": "Enim Commodo Hendrerit Corporation",
      "date": "2021-04-13 18:36:04",
      "budget": "78.57"
    },
    {
      "name": "Russell I. Hardin",
      "email": "nunc.Quisque@gravidamaurisut.org",
      "city": "Staraya Kupavna",
      "company": "Mattis Ornare Lectus Institute",
      "date": "2021-11-21 06:14:10",
      "budget": "73.97"
    },
    {
      "name": "Eugenia G. Lopez",
      "email": "eu@eueleifendnec.com",
      "city": "Nurallao",
      "company": "Lorem Corporation",
      "date": "2020-08-13 07:36:39",
      "budget": "72.56"
    },
    {
      "name": "Brennan M. Hickman",
      "email": "Sed.auctor@tellussem.net",
      "city": "Santa Bárbara",
      "company": "Lectus Rutrum Urna Corporation",
      "date": "2021-02-07 16:50:38",
      "budget": "61.92"
    },
    {
      "name": "Victor E. Trevino",
      "email": "In.nec@mus.net",
      "city": "Grand Island",
      "company": "Lacinia Associates",
      "date": "2022-06-11 08:25:28",
      "budget": "71.29"
    },
    {
      "name": "Armand W. Orr",
      "email": "orci@aptenttacitisociosqu.co.uk",
      "city": "Yuryuzan",
      "company": "Integer Eu Corp.",
      "date": "2020-10-23 13:38:12",
      "budget": "89.43"
    },
    {
      "name": "Oleg F. Ferguson",
      "email": "fringilla@Curae.com",
      "city": "Herstappe",
      "company": "Laoreet Limited",
      "date": "2021-02-06 11:09:34",
      "budget": "86.17"
    },
    {
      "name": "Echo F. Reilly",
      "email": "nec@lobortisClassaptent.edu",
      "city": "San Pedro",
      "company": "Porttitor Scelerisque Neque Inc.",
      "date": "2021-06-06 04:59:11",
      "budget": "14.61"
    },
    {
      "name": "Daria J. Franklin",
      "email": "lectus.pede.et@vel.edu",
      "city": "Woodstock",
      "company": "Magna LLC",
      "date": "2021-07-14 12:25:40",
      "budget": "58.65"
    },
    {
      "name": "Nathan L. Weaver",
      "email": "pellentesque.Sed@Aliquamrutrum.co.uk",
      "city": "Tuktoyaktuk",
      "company": "Justo Inc.",
      "date": "2021-12-27 10:39:35",
      "budget": "63.95"
    },
    {
      "name": "Priscilla X. Crane",
      "email": "leo.Morbi.neque@ornareegestas.edu",
      "city": "Leonding",
      "company": "Vel Mauris Integer Inc.",
      "date": "2021-11-04 23:04:00",
      "budget": "10.31"
    },
    {
      "name": "Neville U. Norman",
      "email": "ornare@Aeneanegetmagna.ca",
      "city": "Merdorp",
      "company": "Aliquet Magna LLP",
      "date": "2020-11-10 20:38:20",
      "budget": "29.90"
    },
    {
      "name": "Burton R. Cleveland",
      "email": "risus.Donec@fringillacursuspurus.net",
      "city": "Gosnells",
      "company": "Pede Cras Vulputate Ltd",
      "date": "2022-01-17 10:53:07",
      "budget": "82.26"
    },
    {
      "name": "Calvin B. Lowe",
      "email": "Nullam@urnaetarcu.edu",
      "city": "Guelph",
      "company": "Ut Erat LLP",
      "date": "2021-11-14 13:57:33",
      "budget": "49.81"
    },
    {
      "name": "Desirae P. Mayer",
      "email": "sed@malesuada.edu",
      "city": "Borgone Susa",
      "company": "Vivamus Nibh Corporation",
      "date": "2020-08-31 07:14:13",
      "budget": "31.51"
    },
    {
      "name": "Raymond R. Harvey",
      "email": "Aliquam.nisl@euismod.net",
      "city": "Napier",
      "company": "Sit Amet Metus LLP",
      "date": "2020-10-30 12:16:48",
      "budget": "27.99"
    },
    {
      "name": "Upton V. Cotton",
      "email": "nisi.Aenean@molestietellus.org",
      "city": "Ingraj Bazar",
      "company": "Mauris Vestibulum Neque Associates",
      "date": "2022-01-10 12:15:11",
      "budget": "80.65"
    },
    {
      "name": "Rigel V. Mccray",
      "email": "vitae.diam@nonhendreritid.co.uk",
      "city": "Brye",
      "company": "Ac Mattis Limited",
      "date": "2022-05-05 17:44:11",
      "budget": "87.87"
    },
    {
      "name": "Stephanie X. Bush",
      "email": "ultricies.sem.magna@nequetellus.co.uk",
      "city": "North Shore",
      "company": "Iaculis Incorporated",
      "date": "2021-12-29 12:22:25",
      "budget": "71.72"
    },
    {
      "name": "Avram M. Key",
      "email": "consequat.purus.Maecenas@Nulla.edu",
      "city": "General Lagos",
      "company": "A Sollicitudin Consulting",
      "date": "2021-10-24 01:13:09",
      "budget": "61.04"
    },
    {
      "name": "Hall X. Watson",
      "email": "metus.Aenean@hendrerit.ca",
      "city": "Nanaimo",
      "company": "Mollis Integer PC",
      "date": "2022-05-03 13:31:55",
      "budget": "88.71"
    },
    {
      "name": "John Q. Hughes",
      "email": "Phasellus.at.augue@euerosNam.net",
      "city": "Lenna",
      "company": "Metus Sit Company",
      "date": "2022-05-31 04:10:27",
      "budget": "73.75"
    },
    {
      "name": "Desiree H. Cooke",
      "email": "fames.ac@sapienmolestieorci.ca",
      "city": "Thalassery",
      "company": "Id Magna Et Ltd",
      "date": "2021-07-11 03:17:49",
      "budget": "79.75"
    },
    {
      "name": "Allen K. Harrison",
      "email": "vulputate.eu.odio@nibhdolor.org",
      "city": "Town of Yarmouth",
      "company": "In Condimentum LLC",
      "date": "2021-01-10 20:50:55",
      "budget": "72.70"
    },
    {
      "name": "Kessie E. Wright",
      "email": "vehicula.risus.Nulla@faucibus.com",
      "city": "Allerona",
      "company": "At Lacus PC",
      "date": "2021-07-31 06:10:41",
      "budget": "40.07"
    },
    {
      "name": "Benjamin Y. Pruitt",
      "email": "fermentum.vel.mauris@arcu.edu",
      "city": "Ely",
      "company": "Torquent Per Company",
      "date": "2021-08-19 19:06:44",
      "budget": "52.86"
    },
    {
      "name": "Yuli V. Roberts",
      "email": "sed@montes.net",
      "city": "Chicoutimi",
      "company": "Nulla Institute",
      "date": "2021-02-17 05:10:11",
      "budget": "93.74"
    },
    {
      "name": "Xandra O. Pierce",
      "email": "libero.mauris.aliquam@ipsumCurabiturconsequat.edu",
      "city": "Sosnowiec",
      "company": "Dolor Donec Fringilla Corp.",
      "date": "2022-03-29 18:01:45",
      "budget": "40.69"
    },
    {
      "name": "Tamara E. Booker",
      "email": "ut@nunc.ca",
      "city": "Cupar",
      "company": "Ipsum Curabitur Corporation",
      "date": "2021-01-13 18:28:15",
      "budget": "19.87"
    },
    {
      "name": "Laith C. English",
      "email": "congue.In.scelerisque@vehicula.ca",
      "city": "Großpetersdorf",
      "company": "Mus Proin Inc.",
      "date": "2022-07-25 15:07:50",
      "budget": "31.54"
    },
    {
      "name": "Giacomo Q. Oneal",
      "email": "massa@dapibusligula.co.uk",
      "city": "Kirkland",
      "company": "In Institute",
      "date": "2021-03-25 16:23:53",
      "budget": "39.27"
    },
    {
      "name": "Abel G. Hamilton",
      "email": "neque.et.nunc@sapienmolestieorci.ca",
      "city": "Bon Accord",
      "company": "Posuere Enim Nisl Incorporated",
      "date": "2021-09-19 04:40:10",
      "budget": "12.32"
    },
    {
      "name": "Hayes O. Walker",
      "email": "magnis.dis.parturient@Quisque.co.uk",
      "city": "Falisolle",
      "company": "Luctus Et Consulting",
      "date": "2021-01-20 03:40:18",
      "budget": "37.88"
    },
    {
      "name": "Quemby D. Chapman",
      "email": "mattis.ornare@in.ca",
      "city": "Court-Saint-Etienne",
      "company": "Nisl Foundation",
      "date": "2021-11-16 13:35:57",
      "budget": "96.20"
    },
    {
      "name": "McKenzie P. Zimmerman",
      "email": "ultricies@acturpis.co.uk",
      "city": "Pondicherry",
      "company": "Nam Tempor Diam Incorporated",
      "date": "2020-11-14 08:18:22",
      "budget": "59.14"
    },
    {
      "name": "Lane D. Vasquez",
      "email": "Nam@fringillamilacinia.edu",
      "city": "Badalona",
      "company": "Scelerisque Neque Corp.",
      "date": "2022-04-13 04:48:16",
      "budget": "46.31"
    },
    {
      "name": "Nathaniel Y. Hull",
      "email": "a@euarcu.co.uk",
      "city": "Tucson",
      "company": "Nunc Sed Libero Inc.",
      "date": "2022-08-02 06:47:37",
      "budget": "27.90"
    },
    {
      "name": "Kirk B. Velasquez",
      "email": "Integer.mollis@nisi.edu",
      "city": "Halen",
      "company": "Pharetra Ut Pharetra Incorporated",
      "date": "2021-09-23 16:51:11",
      "budget": "24.45"
    },
    {
      "name": "Samantha F. Good",
      "email": "sed.dictum.eleifend@pretium.org",
      "city": "Veerle",
      "company": "Eu Enim Etiam Incorporated",
      "date": "2021-09-07 23:59:42",
      "budget": "9.34"
    },
    {
      "name": "Clio U. Crosby",
      "email": "diam.eu.dolor@diamlorem.net",
      "city": "Swadlincote",
      "company": "Nec Institute",
      "date": "2020-12-14 02:05:52",
      "budget": "32.81"
    },
    {
      "name": "Nathaniel C. Ratliff",
      "email": "sem@Classaptent.com",
      "city": "New Haven",
      "company": "Turpis Egestas Fusce LLC",
      "date": "2022-08-08 22:19:16",
      "budget": "51.58"
    },
    {
      "name": "Guy P. Joyce",
      "email": "neque@commodoatlibero.net",
      "city": "Siegendorf",
      "company": "Egestas Hendrerit Company",
      "date": "2021-03-27 00:18:55",
      "budget": "59.71"
    },
    {
      "name": "Kerry P. Scott",
      "email": "gravida@Proin.ca",
      "city": "Morelia",
      "company": "Auctor Incorporated",
      "date": "2022-06-23 01:56:18",
      "budget": "77.15"
    },
    {
      "name": "Mercedes C. Berg",
      "email": "Ut.tincidunt@anteblanditviverra.net",
      "city": "Almere",
      "company": "Vehicula Limited",
      "date": "2021-11-28 06:31:07",
      "budget": "6.50"
    },
    {
      "name": "Jerry V. Andrews",
      "email": "condimentum.eget.volutpat@tristiquepellentesque.org",
      "city": "Trivandrum",
      "company": "Mus Proin Institute",
      "date": "2021-07-27 07:17:30",
      "budget": "0.84"
    },
    {
      "name": "Jaquelyn Q. Atkinson",
      "email": "libero.et.tristique@non.co.uk",
      "city": "Ajmer",
      "company": "Vestibulum Ante Ipsum Inc.",
      "date": "2022-04-04 02:07:16",
      "budget": "67.00"
    },
    {
      "name": "Allegra M. Gross",
      "email": "in.tempus@Innecorci.ca",
      "city": "Siedlce",
      "company": "Non Feugiat Industries",
      "date": "2021-07-29 06:28:03",
      "budget": "71.92"
    },
    {
      "name": "Odysseus R. Allison",
      "email": "bibendum@tempuseu.net",
      "city": "Joliet",
      "company": "Eros Nec Corporation",
      "date": "2020-08-31 06:41:05",
      "budget": "48.95"
    },
    {
      "name": "Martha G. Spence",
      "email": "mauris.sapien@loremfringillaornare.edu",
      "city": "Chambave",
      "company": "Phasellus Vitae Mauris Incorporated",
      "date": "2021-11-15 14:55:54",
      "budget": "71.33"
    },
    {
      "name": "Jolie Q. Beard",
      "email": "Ut.tincidunt@malesuadafringillaest.com",
      "city": "Gravataí",
      "company": "Congue Turpis In Ltd",
      "date": "2022-04-18 01:20:47",
      "budget": "44.77"
    },
    {
      "name": "Garrett E. Brown",
      "email": "tortor@vitae.com",
      "city": "Houston",
      "company": "Suscipit LLC",
      "date": "2022-01-14 07:18:18",
      "budget": "73.80"
    },
    {
      "name": "Ariana Y. Harding",
      "email": "lobortis.ultrices.Vivamus@vulputatenisi.edu",
      "city": "Leoben",
      "company": "Lorem Eget Mollis Corporation",
      "date": "2021-02-17 01:05:00",
      "budget": "39.64"
    },
    {
      "name": "Maris J. Rhodes",
      "email": "sed.facilisis@vitae.edu",
      "city": "Musakhel",
      "company": "Non Enim LLP",
      "date": "2022-04-16 06:40:31",
      "budget": "68.80"
    },
    {
      "name": "Samson G. Jordan",
      "email": "ultrices.sit.amet@malesuada.com",
      "city": "Fleurus",
      "company": "Rutrum PC",
      "date": "2022-06-25 06:16:58",
      "budget": "29.46"
    },
    {
      "name": "Urielle L. Klein",
      "email": "semper@sit.co.uk",
      "city": "Surrey",
      "company": "Vestibulum Lorem Inc.",
      "date": "2021-11-28 00:24:16",
      "budget": "56.30"
    },
    {
      "name": "Aretha O. Preston",
      "email": "Quisque.fringilla.euismod@Nulla.ca",
      "city": "Épinal",
      "company": "Nisl Incorporated",
      "date": "2022-06-24 16:19:44",
      "budget": "43.79"
    },
    {
      "name": "Prescott S. Riddle",
      "email": "ipsum.Suspendisse@pretiumaliquetmetus.com",
      "city": "Ziano di Fiemme",
      "company": "Pellentesque A Consulting",
      "date": "2021-11-18 12:45:03",
      "budget": "62.17"
    },
    {
      "name": "Maya Z. Avila",
      "email": "Fusce.aliquet.magna@DonecfringillaDonec.com",
      "city": "Watermaal-Bosvoorde",
      "company": "Suspendisse Sagittis Nullam Consulting",
      "date": "2021-09-25 20:10:21",
      "budget": "11.75"
    },
    {
      "name": "Griffin V. Mcfarland",
      "email": "dolor.tempus@elit.edu",
      "city": "Kamyzyak",
      "company": "A Scelerisque Sed Industries",
      "date": "2020-09-09 21:22:32",
      "budget": "99.44"
    },
    {
      "name": "Stephanie R. Chaney",
      "email": "at@non.com",
      "city": "San Marcello",
      "company": "Donec Nibh Ltd",
      "date": "2020-11-03 01:10:28",
      "budget": "47.06"
    },
    {
      "name": "Aphrodite J. Riley",
      "email": "gravida.sagittis@musProin.ca",
      "city": "Mainz",
      "company": "Eget Lacus Limited",
      "date": "2021-02-10 13:27:43",
      "budget": "3.42"
    },
    {
      "name": "Quynn X. Murphy",
      "email": "libero@nunc.co.uk",
      "city": "Cuernavaca",
      "company": "Mauris Limited",
      "date": "2021-01-04 13:28:14",
      "budget": "26.31"
    },
    {
      "name": "Benedict C. Nixon",
      "email": "quam@Maecenas.com",
      "city": "Waret-l'Evque",
      "company": "Nibh Company",
      "date": "2022-01-08 13:56:30",
      "budget": "86.55"
    },
    {
      "name": "Andrew K. Boyer",
      "email": "ligula.eu.enim@quisturpisvitae.net",
      "city": "Shikarpur",
      "company": "Malesuada Integer Inc.",
      "date": "2021-08-01 08:23:33",
      "budget": "70.04"
    },
    {
      "name": "Phyllis I. Cooper",
      "email": "eu.enim.Etiam@adipiscing.org",
      "city": "Camrose",
      "company": "Parturient Montes Consulting",
      "date": "2021-02-27 02:54:51",
      "budget": "43.62"
    },
    {
      "name": "Regina J. Mcconnell",
      "email": "dictum.sapien.Aenean@ipsum.co.uk",
      "city": "West Ham",
      "company": "Augue Malesuada Foundation",
      "date": "2022-04-29 13:46:54",
      "budget": "28.17"
    },
    {
      "name": "Rashad T. Lloyd",
      "email": "eget.tincidunt.dui@arcuVivamus.edu",
      "city": "GozŽe",
      "company": "Cras Inc.",
      "date": "2021-08-11 02:14:19",
      "budget": "40.45"
    },
    {
      "name": "Porter E. Lancaster",
      "email": "massa.lobortis.ultrices@Donec.net",
      "city": "Saint-Rhémy-en-Bosses",
      "company": "Nullam Lobortis Consulting",
      "date": "2020-10-31 18:43:56",
      "budget": "39.12"
    },
    {
      "name": "Dara R. Jimenez",
      "email": "sit.amet@Suspendisseac.edu",
      "city": "Großpetersdorf",
      "company": "Sem Semper Foundation",
      "date": "2021-04-14 02:45:20",
      "budget": "5.84"
    },
    {
      "name": "Imani X. Valencia",
      "email": "quam@lacusNullatincidunt.com",
      "city": "Lüneburg",
      "company": "Dapibus Rutrum Justo Institute",
      "date": "2022-06-30 09:20:37",
      "budget": "66.66"
    },
    {
      "name": "Beau M. Petty",
      "email": "quam@scelerisque.ca",
      "city": "Bima",
      "company": "Tincidunt Corporation",
      "date": "2022-08-02 19:52:12",
      "budget": "81.47"
    },
    {
      "name": "Basil W. Hensley",
      "email": "velit.Sed@suscipitest.net",
      "city": "Castiglione a Casauria",
      "company": "Purus Industries",
      "date": "2022-07-19 07:23:54",
      "budget": "34.39"
    },
    {
      "name": "Tanisha B. Johnston",
      "email": "est@tristique.co.uk",
      "city": "Uitkerke",
      "company": "Duis Institute",
      "date": "2021-08-07 05:05:41",
      "budget": "72.03"
    },
    {
      "name": "Alexa F. Rich",
      "email": "neque@vestibulum.org",
      "city": "Bitterfeld-Wolfen",
      "company": "Sed Nunc Corp.",
      "date": "2021-05-09 22:38:43",
      "budget": "4.06"
    },
    {
      "name": "Fritz F. Greene",
      "email": "ut.quam@dictum.edu",
      "city": "GomzŽ-Andoumont",
      "company": "Eros Proin Corp.",
      "date": "2022-02-02 10:40:38",
      "budget": "90.90"
    },
    {
      "name": "Nora B. Giles",
      "email": "justo.nec.ante@risusNunc.net",
      "city": "Heist-aan-Zee",
      "company": "Nec Mauris Industries",
      "date": "2022-03-02 17:20:53",
      "budget": "7.69"
    },
    {
      "name": "Rama V. Walsh",
      "email": "enim@Praesent.org",
      "city": "Gravelbourg",
      "company": "Accumsan Convallis Associates",
      "date": "2020-09-20 11:19:42",
      "budget": "18.39"
    },
    {
      "name": "Barrett F. Jacobs",
      "email": "mauris@pedeultricesa.net",
      "city": "Kirriemuir",
      "company": "Nec Malesuada Incorporated",
      "date": "2022-07-16 17:27:34",
      "budget": "39.81"
    },
    {
      "name": "Bevis U. Fletcher",
      "email": "sit.amet@Maecenasmalesuadafringilla.com",
      "city": "Chiclayo",
      "company": "Lacus Consulting",
      "date": "2022-06-17 09:46:52",
      "budget": "78.62"
    },
    {
      "name": "Nyssa H. Dillon",
      "email": "Sed.et.libero@urna.ca",
      "city": "Geleen",
      "company": "Facilisis Non Bibendum Ltd",
      "date": "2021-11-15 08:20:21",
      "budget": "58.26"
    },
    {
      "name": "Celeste A. Robbins",
      "email": "Nullam.nisl.Maecenas@dolorquam.ca",
      "city": "Castelbianco",
      "company": "Dis Inc.",
      "date": "2021-05-13 02:28:30",
      "budget": "46.85"
    },
    {
      "name": "Angelica W. Haney",
      "email": "eget.tincidunt.dui@non.ca",
      "city": "Casciana Terme",
      "company": "Auctor Velit Eget Company",
      "date": "2022-07-12 09:04:51",
      "budget": "89.45"
    },
    {
      "name": "Lee K. Golden",
      "email": "urna.justo@ullamcorperDuisat.com",
      "city": "Hull",
      "company": "Congue Turpis Foundation",
      "date": "2021-11-02 03:36:08",
      "budget": "24.36"
    },
    {
      "name": "Duncan Q. Shelton",
      "email": "posuere.enim@Quisque.ca",
      "city": "FlŽnu",
      "company": "Orci Luctus Et LLP",
      "date": "2022-04-04 08:50:24",
      "budget": "81.81"
    },
    {
      "name": "Silas Z. Rowland",
      "email": "ac.orci.Ut@pretiumneque.ca",
      "city": "Muno",
      "company": "Lobortis Mauris Suspendisse Associates",
      "date": "2020-12-04 15:42:59",
      "budget": "30.73"
    },
    {
      "name": "Joel T. Rodriguez",
      "email": "quis.pede.Praesent@velvenenatis.org",
      "city": "Nelson",
      "company": "Iaculis Odio Nam Limited",
      "date": "2020-08-20 18:29:18",
      "budget": "70.49"
    },
    {
      "name": "Hammett J. Bonner",
      "email": "Aenean.massa.Integer@id.com",
      "city": "Tresigallo",
      "company": "Orci Lobortis Augue Foundation",
      "date": "2020-12-04 04:27:05",
      "budget": "60.09"
    },
    {
      "name": "Dalton L. Robinson",
      "email": "dictum@ametornarelectus.net",
      "city": "Thionville",
      "company": "Amet Consectetuer Corp.",
      "date": "2021-02-14 12:04:23",
      "budget": "33.83"
    },
    {
      "name": "Carolyn E. Bryan",
      "email": "scelerisque@cursusInteger.com",
      "city": "Satka",
      "company": "In LLC",
      "date": "2022-01-21 11:17:29",
      "budget": "7.82"
    },
    {
      "name": "Chase T. Harrington",
      "email": "aliquet.molestie.tellus@tristique.org",
      "city": "Vertou",
      "company": "Penatibus Et Ltd",
      "date": "2020-10-06 09:22:57",
      "budget": "51.42"
    },
    {
      "name": "Colorado R. Carson",
      "email": "ante.dictum@egestasDuisac.edu",
      "city": "Yellowknife",
      "company": "Orci Donec LLP",
      "date": "2020-10-05 12:06:52",
      "budget": "94.09"
    },
    {
      "name": "Colette D. Kirkland",
      "email": "arcu.Sed.eu@velitSedmalesuada.com",
      "city": "Oberpullendorf",
      "company": "At Iaculis Quis PC",
      "date": "2021-05-20 21:51:50",
      "budget": "27.48"
    }
  ];

  columns: Array<PoTableColumn> = [
    {property: 'name', label: 'Usuário'},
    { property: 'email', label: 'E-mail' },
    { property: 'city', label: 'Cidade' },
    { property: 'company', label: 'Empresa' },
    { property: 'date', label: 'Data da despesa', type: 'date', format:'dd/MM/yyyy'},
    { property: 'budget', label: 'Custo', type: 'currency', format: 'USD'}
  ];

  ngOnInit(): void {
  }

}
