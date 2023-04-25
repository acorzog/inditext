# My Cypress Tests

Este repositorio contiene los 3 Ejercicios requeridos como parte de la Prueba técnica de QA DEV

## Instalación

1. Clonar el repositorio
    `git clone`

2. Ubicarse en la carpeta Automation_Test y correr npm install para instalar todas las dependencias
    `npm install`

3. para correr todos los test en consola ejecutar en la terminal
    `npx cypress run`
    o referirse a cada step en especifico para ejecutar y entender cada uno


## Ejercicio 1: Prueba exploratoria y reporte de bugs

### **Name:** "7 dias siguientes" button enabled for the last date available.

### **Description**

If a user is searching for a One Way or Return flight and selects the last available date in the calendar, when selecting the flight the `7 dias siguientes` button is enabled. When clicking on this to access this information, the page throws an error not finding availability. However, for Round Trip flights this button is disabled, which should be the same for One Way flights and prevent the user from reaching this error page.
<br />

### **Environment**

This issue was found on the Avianca Production page
<br />

### **URL**

https://www.avianca.com/co/es/
<br />

### **Steps to reproduce**

1. Go to Avianca URL page https://www.avianca.com/co/es/ 
2. Select "Solo ida" or "Ida y Vuelta" as outbound trip
3. Select Bogota to Madrid in ¿A dónde viajas? section
Select as date when you are traveling the las available in ¿Cuándo viajas? section
4. Click on "Fecha ida" calendar
5. Click on the next arrow as much as possible to reach the last date available to travel
6. Click on the las date available
7. Validate the date was selected on "Fecha ida"
8. Click on the "Buscar Vuelos" button
9. Validate the last available date is the same selected previously
10. Validate the "7 dias siguientes" button is available 
<br />

### **Expected Result**

The user should not be able to see "7 dias siguientes" button available as it can search for more dates beyond the last available. 
<br />

### **Actual Result**

"7 dias siguientes" button is available and sent the user to an error page where it tells it can't find more dates available. 
For the Return option the user face the same situation.
<br />

### **Priority**

P3: Low
<br />

### **Severity**

S2: Medium 
<br />

### **Probability**

It is unlikely that a user will reach this page looking for a flight after the last available date. However, the system should be consistent in its behavior for both roundtrip and one-way flights. Additionally, a user should not experience pages with errors unnecessarily.
<br />

### **Attachments**


<br />


## Ejercicio 2: Automatización de una web

1. Ir al Path `Automation_Test/cypress/e2e/FrontendTesting`
2. Alli encontraran un file llamado `search.spec.cy.js`
3. En el se encuentra la automatización correspondiente al ejercicio, donde se realiza la búsqueda en google, se accede a la pagina de Wikipedia, y en ella encuentra la sección de Historia donde valida que el año del primer proceso automatizado fue en 1785.
4. En el ultimo step, no tenia muy claro si se quería el screenshot a toda la pagina o a la sección en especifico donde se encuentra esta información asi que tome ambos.

### Para ejecutar Ejercicio 2:

```shell
Headless:
npx cypress run --spec cypress/e2e/FrontendTesting/search.spec.cy.js
```

```
Headed:
npx cypress open

Luego seleccionar search.spec.cy.js para correrlo en la UI de Cypress
```

## Ejercicio 3: Tratamiento de datos en APIs

### Para el Step 3.1

1. Ir al Path `Automation_Test/cypress/e2e/BackendTesting/`
2. Alli encontraran un file llamado `CreateUser.spec.cy.js`
3. Aquí se hace un POST de un usuario nuevo para ser creado
4. Luego llama ese mismo usuario por el `username` y obtiene la información correspondiente a este usuario, la compara con el request inicial e imprime la respuesta en la UI de Cypress y en consola
<br />

#### Ejecutar Step 3.1

Headless:
`npx cypress run --spec cypress/e2e/BackendTesting/CreateUser.spec.cy.js`

Headed:
`npx cypress open`
Luego seleccionar `CreateUser.spec.cy.js` para correrlo en la UI de Cypress

<br />

#### Response Step 3.1

<details>
  <summary>Expandir para ver la respuesta</summary>

```JSON
{
    "id":999,
    "username":"acorzog",
    "firstName":"Andrea",
    "lastName":"Corzo",
    "email":"acorzog@mailinator.com",
    "password":"Test1234",
    "phone":"3456776567",
    "userStatus":1
}
```
</details>
<br />
<br />

### Para el Step 3.2

1. Ir al Path `Automation_Test/cypress/e2e/BackendTesting/`
2. Alli encontraran un file llamado `petByStatus.spec.cy.js`
3. Aquí se hace un GET para obtener la respuesta a las mascotas con status `sold`
4. Luego se recorre por la longitud del Objeto y obtienen los IDs y NAMEs y se organizan de la manera sugerida
<br />

#### Ejecutar Step 3.2

Headless:
`npx cypress run --spec cypress/e2e/BackendTesting/petByStatus.spec.cy.js`

Headed:
`npx cypress open`
Luego seleccionar `petByStatus.spec.cy.js` para correrlo en la UI de Cypress
<br />

#### Response Step 3.2

<details>
  <summary>Expandir para ver la respuesta</summary>
  
  ```JSON
  [
	{
		"id": "171844",
		"name": "Sharik"
	},
	{
		"id": "642718",
		"name": "Charley"
	},
	{
		"id": "880335",
		"name": "Elwanek"
	},
	{
		"id": "599597",
		"name": "Elwanek"
	},
	{
		"id": "643670",
		"name": "Elwanek2"
	},
	{
		"id": "974647",
		"name": "Elwanek"
	},
	{
		"id": "513712",
		"name": "Elwanek2"
	},
	{
		"id": "74408294",
		"name": "doggie"
	},
	{
		"id": "822922",
		"name": "doggie"
	},
	{
		"id": "57352251",
		"name": "doggie"
	},
	{
		"id": "89",
		"name": "Homa"
	},
	{
		"id": "712356652"
	},
	{
		"id": "112794277"
	},
	{
		"id": "439062450"
	},
	{
		"id": "1234",
		"name": "cow"
	},
	{
		"id": "15072010",
		"name": "Стрелка"
	},
	{
		"id": "110",
		"name": "Greta"
	},
	{
		"id": "1698199",
		"name": "Sara"
	},
	{
		"id": "4507",
		"name": "morell jones"
	},
	{
		"id": "456124",
		"name": "cowcow"
	},
	{
		"id": "94501781",
		"name": "doggie"
	},
	{
		"id": "6969420",
		"name": "DAWG"
	},
	{
		"id": "150",
		"name": "NEW_DOGGIE"
	},
	{
		"id": "1881",
		"name": "Hinata"
	},
	{
		"id": "188881",
		"name": "Hinata"
	},
	{
		"id": "55565454",
		"name": "Tom"
	},
	{
		"id": "37930519",
		"name": "doggie"
	},
	{
		"id": "987456123",
		"name": "Kuka"
	},
	{
		"id": "99968774",
		"name": "Хот дог"
	},
	{
		"id": "987456321",
		"name": "{{name}}"
	},
	{
		"id": "321456987",
		"name": "{{name}}"
	},
	{
		"id": "11",
		"name": "Boss"
	},
	{
		"id": "20593238",
		"name": "doggie"
	},
	{
		"id": "71896898",
		"name": "Greta"
	},
	{
		"id": "7772023777",
		"name": "Гектор"
	},
	{
		"id": "930",
		"name": "isaac in"
	},
	{
		"id": "56331470",
		"name": "doggie"
	},
	{
		"id": "91507602",
		"name": "doggie"
	},
	{
		"id": "24093935",
		"name": "doggie"
	},
	{
		"id": "3708840",
		"name": "doggie"
	},
	{
		"id": "27042023",
		"name": "abai"
	},
	{
		"id": "3903023",
		"name": "doggie"
	},
	{
		"id": "13"
	},
	{
		"id": "12"
	},
	{
		"id": "521898",
		"name": "Kayleigh"
	},
	{
		"id": "725834",
		"name": "Kasey"
	},
	{
		"id": "170391",
		"name": "<Homa>"
	},
	{
		"id": "62751340",
		"name": "doggie"
	},
	{
		"id": "24572652",
		"name": "doggie"
	},
	{
		"id": "75854097",
		"name": "doggie"
	},
	{
		"id": "79897977",
		"name": "doggie"
	},
	{
		"id": "38541659",
		"name": "doggie"
	},
	{
		"id": "23437566",
		"name": "doggie"
	},
	{
		"id": "82188160",
		"name": "doggie"
	},
	{
		"id": "22061989",
		"name": "doggie"
	},
	{
		"id": "76621170",
		"name": "doggie"
	},
	{
		"id": "40010473",
		"name": "doggie"
	},
	{
		"id": "38480305",
		"name": "doggie"
	},
	{
		"id": "52931566",
		"name": "doggie"
	},
	{
		"id": "23327731",
		"name": "doggie"
	},
	{
		"id": "33845545",
		"name": "doggie"
	},
	{
		"id": "2022000",
		"name": "Star"
	},
	{
		"id": "33377689",
		"name": "doggie"
	},
	{
		"id": "24364310",
		"name": "kitten1"
	},
	{
		"id": "5644444",
		"name": "Собака"
	},
	{
		"id": "87705905",
		"name": "doggie"
	},
	{
		"id": "777123",
		"name": "Nemo"
	},
	{
		"id": "70119872",
		"name": "Анаконда"
	},
	{
		"id": "70119872000",
		"name": "LAPIN LAPIN"
	},
	{
		"id": "85118363",
		"name": "doggie"
	},
	{
		"id": "37326840",
		"name": "doggie"
	},
	{
		"id": "71551342",
		"name": "doggie"
	},
	{
		"id": "51338511",
		"name": "doggie"
	},
	{
		"id": "1711982",
		"name": "doggie"
	},
	{
		"id": "90369791",
		"name": "doggie"
	}
]
  ```
</details>
<br />
<br />
 
### Para el Step 3.3

1. Ir al Path `Automation_Test/cypress/e2e/BackendTesting/`
2. Alli encontraran un file llamado `petByStatus.spec.cy.js`
3. Aquí se hace un GET para encontrar las mascotas con status `sold`
4. Luego se itera sobre el Objeto y se obtiene la cuenta por cada uno de las veces que un nombre se repite y se organiza en un nuevo objeto

#### Ejecutar Step 3.3

Headless:
`npx cypress run --spec cypress/e2e/BackendTesting/petByStatus.spec.cy.js`

Headed:
`npx cypress open`
Luego seleccionar `petByStatus.spec.cy.js` para correrlo en la UI de Cypress
<br />

#### Response Step 3.3

<details>
  <summary>Expandir para ver la respuesta</summary>
  
  ```JSON
  {
	"Sharik": 1,
	"Charley": 1,
	"Elwanek": 3,
	"Elwanek2": 2,
	"doggie": 11,
	"undefined": 3,
	"cow": 1,
	"Стрелка": 1,
	"Greta": 2,
	"Sara": 1,
	"morell jones": 1,
	"cowcow": 1,
	"DAWG": 1,
	"NEW_DOGGIE": 1,
	"Hinata": 2,
	"Tom": 1,
	"Kuka": 1,
	"Хот дог": 1,
	"{{name}}": 2,
	"Boss": 1,
	"Гектор": 1,
	"isaac in": 1,
	"abai": 1,
	"Kayleigh": 1,
	"Kasey": 1
}
  ```
</details>
<br />
<br />


