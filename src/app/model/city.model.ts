export interface CityModel {
  id: number;
  name: string;
  countrycode: string;
  district: string;
  population: number;
}

export const cityList =
  [{'id': 1, 'name': 'Kabul', 'countrycode': 'AFG', 'district': 'Kabol', 'population': 1780000}, {
    'id': 2,
    'name': 'Taman',
    'countrycode': 'IDN',
    'district': 'East Java',
    'population': 107000
  }, {'id': 3, 'name': 'Herat', 'countrycode': 'AFG', 'district': 'Herat', 'population': 186800}, {
    'id': 4,
    'name': 'Mazar-e-Sharif',
    'countrycode': 'AFG',
    'district': 'Balkh',
    'population': 127800
  }, {'id': 5, 'name': 'Amsterdam', 'countrycode': 'NLD', 'district': 'Noord-Holland', 'population': 731200}, {
    'id': 6,
    'name': 'Rotterdam',
    'countrycode': 'NLD',
    'district': 'Zuid-Holland',
    'population': 593321
  }, {'id': 7, 'name': 'Haag', 'countrycode': 'NLD', 'district': 'Zuid-Holland', 'population': 440900}, {
    'id': 8,
    'name': 'Utrecht',
    'countrycode': 'NLD',
    'district': 'Utrecht',
    'population': 234323
  }, {'id': 9, 'name': 'Eindhoven', 'countrycode': 'NLD', 'district': 'Noord-Brabant', 'population': 201843}, {
    'id': 10,
    'name': 'Tilburg',
    'countrycode': 'NLD',
    'district': 'Noord-Brabant',
    'population': 193238
  }, {'id': 11, 'name': 'Groningen', 'countrycode': 'NLD', 'district': 'Groningen', 'population': 172701}, {
    'id': 12,
    'name': 'Breda',
    'countrycode': 'NLD',
    'district': 'Noord-Brabant',
    'population': 160398
  }, {'id': 13, 'name': 'Apeldoorn', 'countrycode': 'NLD', 'district': 'Gelderland', 'population': 153491}, {
    'id': 14,
    'name': 'Nijmegen',
    'countrycode': 'NLD',
    'district': 'Gelderland',
    'population': 152463
  }, {'id': 15, 'name': 'Enschede', 'countrycode': 'NLD', 'district': 'Overijssel', 'population': 149544}, {
    'id': 16,
    'name': 'Haarlem',
    'countrycode': 'NLD',
    'district': 'Noord-Holland',
    'population': 148772
  }, {'id': 17, 'name': 'Almere', 'countrycode': 'NLD', 'district': 'Flevoland', 'population': 142465}, {
    'id': 18,
    'name': 'Arnhem',
    'countrycode': 'NLD',
    'district': 'Gelderland',
    'population': 138020
  }, {'id': 19, 'name': 'Zaanstad', 'countrycode': 'NLD', 'district': 'Noord-Holland', 'population': 135621}, {
    'id': 20,
    'name': 'Â´s-Hertogenbosch',
    'countrycode': 'NLD',
    'district': 'Noord-Brabant',
    'population': 129170
  }, {'id': 21, 'name': 'Amersfoort', 'countrycode': 'NLD', 'district': 'Utrecht', 'population': 126270}, {
    'id': 22,
    'name': 'Maastricht',
    'countrycode': 'NLD',
    'district': 'Limburg',
    'population': 122087
  }, {'id': 23, 'name': 'Dordrecht', 'countrycode': 'NLD', 'district': 'Zuid-Holland', 'population': 119811}, {
    'id': 24,
    'name': 'Leiden',
    'countrycode': 'NLD',
    'district': 'Zuid-Holland',
    'population': 117196
  }, {'id': 25, 'name': 'Haarlemmermeer', 'countrycode': 'NLD', 'district': 'Noord-Holland', 'population': 110722}, {
    'id': 26,
    'name': 'Zoetermeer',
    'countrycode': 'NLD',
    'district': 'Zuid-Holland',
    'population': 110214
  }, {'id': 27, 'name': 'Emmen', 'countrycode': 'NLD', 'district': 'Drenthe', 'population': 105853}, {
    'id': 28,
    'name': 'Zwolle',
    'countrycode': 'NLD',
    'district': 'Overijssel',
    'population': 105819
  }, {'id': 29, 'name': 'Ede', 'countrycode': 'NLD', 'district': 'Gelderland', 'population': 101574}, {
    'id': 30,
    'name': 'Delft',
    'countrycode': 'NLD',
    'district': 'Zuid-Holland',
    'population': 95268
  }, {'id': 31, 'name': 'Heerlen', 'countrycode': 'NLD', 'district': 'Limburg', 'population': 95052}, {
    'id': 32,
    'name': 'Alkmaar',
    'countrycode': 'NLD',
    'district': 'Noord-Holland',
    'population': 92713
  }, {'id': 33, 'name': 'Willemstad', 'countrycode': 'ANT', 'district': 'CuraÃ§ao', 'population': 2345}, {
    'id': 34,
    'name': 'Tirana',
    'countrycode': 'ALB',
    'district': 'Tirana',
    'population': 270000
  }, {'id': 35, 'name': 'Alger', 'countrycode': 'DZA', 'district': 'Alger', 'population': 2168000}, {
    'id': 36,
    'name': 'Oran',
    'countrycode': 'DZA',
    'district': 'Oran',
    'population': 609823
  }, {'id': 37, 'name': 'Constantine', 'countrycode': 'DZA', 'district': 'Constantine', 'population': 443727}, {
    'id': 38,
    'name': 'Annaba',
    'countrycode': 'DZA',
    'district': 'Annaba',
    'population': 222518
  }, {'id': 39, 'name': 'Batna', 'countrycode': 'DZA', 'district': 'Batna', 'population': 183377}, {
    'id': 40,
    'name': 'SÃ©tif',
    'countrycode': 'DZA',
    'district': 'SÃ©tif',
    'population': 179055
  }, {'id': 41, 'name': 'Sidi Bel AbbÃ¨s', 'countrycode': 'DZA', 'district': 'Sidi Bel AbbÃ¨s', 'population': 153106}, {
    'id': 42,
    'name': 'Skikda',
    'countrycode': 'DZA',
    'district': 'Skikda',
    'population': 128747
  }, {'id': 43, 'name': 'Biskra', 'countrycode': 'DZA', 'district': 'Biskra', 'population': 128281}, {
    'id': 44,
    'name': 'Blida (el-Boulaida)',
    'countrycode': 'DZA',
    'district': 'Blida',
    'population': 127284
  }, {'id': 45, 'name': 'BÃ©jaÃ¯a', 'countrycode': 'DZA', 'district': 'BÃ©jaÃ¯a', 'population': 117162}, {
    'id': 46,
    'name': 'Mostaganem',
    'countrycode': 'DZA',
    'district': 'Mostaganem',
    'population': 115212
  }, {'id': 47, 'name': 'TÃ©bessa', 'countrycode': 'DZA', 'district': 'TÃ©bessa', 'population': 112007}, {
    'id': 48,
    'name': 'Tlemcen (Tilimsen)',
    'countrycode': 'DZA',
    'district': 'Tlemcen',
    'population': 110242
  }, {'id': 49, 'name': 'BÃ©char', 'countrycode': 'DZA', 'district': 'BÃ©char', 'population': 107311}, {
    'id': 50,
    'name': 'Tiaret',
    'countrycode': 'DZA',
    'district': 'Tiaret',
    'population': 100118
  }, {'id': 51, 'name': 'Ech-Chleff (el-Asnam)', 'countrycode': 'DZA', 'district': 'Chlef', 'population': 96794}, {
    'id': 52,
    'name': 'GhardaÃ¯a',
    'countrycode': 'DZA',
    'district': 'GhardaÃ¯a',
    'population': 89415
  }, {'id': 53, 'name': 'Tafuna', 'countrycode': 'ASM', 'district': 'Tutuila', 'population': 5200}, {
    'id': 54,
    'name': 'Fagatogo',
    'countrycode': 'ASM',
    'district': 'Tutuila',
    'population': 2323
  }, {'id': 55, 'name': 'Andorra la Vella', 'countrycode': 'AND', 'district': 'Andorra la Vella', 'population': 21189}, {
    'id': 56,
    'name': 'Luanda',
    'countrycode': 'AGO',
    'district': 'Luanda',
    'population': 2022000
  }, {'id': 57, 'name': 'Huambo', 'countrycode': 'AGO', 'district': 'Huambo', 'population': 163100}, {
    'id': 58,
    'name': 'Lobito',
    'countrycode': 'AGO',
    'district': 'Benguela',
    'population': 130000
  }, {'id': 59, 'name': 'Benguela', 'countrycode': 'AGO', 'district': 'Benguela', 'population': 128300}, {
    'id': 60,
    'name': 'Namibe',
    'countrycode': 'AGO',
    'district': 'Namibe',
    'population': 118200
  }, {'id': 61, 'name': 'South Hill', 'countrycode': 'AIA', 'district': 'Â–', 'population': 961}, {
    'id': 62,
    'name': 'The Valley',
    'countrycode': 'AIA',
    'district': 'Â–',
    'population': 595
  }, {'id': 63, 'name': 'Saint JohnÂ´s', 'countrycode': 'ATG', 'district': 'St John', 'population': 24000}, {
    'id': 64,
    'name': 'Dubai',
    'countrycode': 'ARE',
    'district': 'Dubai',
    'population': 669181
  }, {'id': 65, 'name': 'Abu Dhabi', 'countrycode': 'ARE', 'district': 'Abu Dhabi', 'population': 398695}, {
    'id': 66,
    'name': 'Sharja',
    'countrycode': 'ARE',
    'district': 'Sharja',
    'population': 320095
  }, {'id': 67, 'name': 'al-Ayn', 'countrycode': 'ARE', 'district': 'Abu Dhabi', 'population': 225970}, {
    'id': 68,
    'name': 'Ajman',
    'countrycode': 'ARE',
    'district': 'Ajman',
    'population': 114395
  }, {'id': 69, 'name': 'Buenos Aires', 'countrycode': 'ARG', 'district': 'Distrito Federal', 'population': 2982146}, {
    'id': 70,
    'name': 'La Matanza',
    'countrycode': 'ARG',
    'district': 'Buenos Aires',
    'population': 1266461
  }, {'id': 71, 'name': 'CÃ³rdoba', 'countrycode': 'ARG', 'district': 'CÃ³rdoba', 'population': 1157507}, {
    'id': 72,
    'name': 'Rosario',
    'countrycode': 'ARG',
    'district': 'Santa FÃ©',
    'population': 907718
  }, {'id': 73, 'name': 'Lomas de Zamora', 'countrycode': 'ARG', 'district': 'Buenos Aires', 'population': 622013}, {
    'id': 74,
    'name': 'Quilmes',
    'countrycode': 'ARG',
    'district': 'Buenos Aires',
    'population': 559249
  }, {'id': 75, 'name': 'Almirante Brown', 'countrycode': 'ARG', 'district': 'Buenos Aires', 'population': 538918}, {
    'id': 76,
    'name': 'La Plata',
    'countrycode': 'ARG',
    'district': 'Buenos Aires',
    'population': 521936
  }, {'id': 77, 'name': 'Mar del Plata', 'countrycode': 'ARG', 'district': 'Buenos Aires', 'population': 512880}, {
    'id': 78,
    'name': 'San Miguel de TucumÃ¡n',
    'countrycode': 'ARG',
    'district': 'TucumÃ¡n',
    'population': 470809
  }, {'id': 79, 'name': 'LanÃºs', 'countrycode': 'ARG', 'district': 'Buenos Aires', 'population': 469735}, {
    'id': 80,
    'name': 'Merlo',
    'countrycode': 'ARG',
    'district': 'Buenos Aires',
    'population': 463846
  }, {'id': 81, 'name': 'General San MartÃ­n', 'countrycode': 'ARG', 'district': 'Buenos Aires', 'population': 422542}, {
    'id': 82,
    'name': 'Salta',
    'countrycode': 'ARG',
    'district': 'Salta',
    'population': 367550
  }, {'id': 83, 'name': 'Moreno', 'countrycode': 'ARG', 'district': 'Buenos Aires', 'population': 356993}, {
    'id': 84,
    'name': 'Santa FÃ©',
    'countrycode': 'ARG',
    'district': 'Santa FÃ©',
    'population': 353063
  }, {'id': 85, 'name': 'Avellaneda', 'countrycode': 'ARG', 'district': 'Buenos Aires', 'population': 353046}, {
    'id': 86,
    'name': 'Tres de Febrero',
    'countrycode': 'ARG',
    'district': 'Buenos Aires',
    'population': 352311
  }, {'id': 87, 'name': 'MorÃ³n', 'countrycode': 'ARG', 'district': 'Buenos Aires', 'population': 349246}, {
    'id': 88,
    'name': 'Florencio Varela',
    'countrycode': 'ARG',
    'district': 'Buenos Aires',
    'population': 315432
  }, {'id': 89, 'name': 'San Isidro', 'countrycode': 'ARG', 'district': 'Buenos Aires', 'population': 306341}, {
    'id': 90,
    'name': 'Tigre',
    'countrycode': 'ARG',
    'district': 'Buenos Aires',
    'population': 296226
  }, {'id': 91, 'name': 'Malvinas Argentinas', 'countrycode': 'ARG', 'district': 'Buenos Aires', 'population': 290335}, {
    'id': 92,
    'name': 'Vicente LÃ³pez',
    'countrycode': 'ARG',
    'district': 'Buenos Aires',
    'population': 288341
  }, {'id': 93, 'name': 'Berazategui', 'countrycode': 'ARG', 'district': 'Buenos Aires', 'population': 276916}, {
    'id': 94,
    'name': 'Corrientes',
    'countrycode': 'ARG',
    'district': 'Corrientes',
    'population': 258103
  }, {'id': 95, 'name': 'San Miguel', 'countrycode': 'ARG', 'district': 'Buenos Aires', 'population': 248700}, {
    'id': 96,
    'name': 'BahÃ­a Blanca',
    'countrycode': 'ARG',
    'district': 'Buenos Aires',
    'population': 239810
  }, {'id': 97, 'name': 'Esteban EcheverrÃ­a', 'countrycode': 'ARG', 'district': 'Buenos Aires', 'population': 235760}, {
    'id': 98,
    'name': 'Resistencia',
    'countrycode': 'ARG',
    'district': 'Chaco',
    'population': 229212
  }, {'id': 99, 'name': 'JosÃ© C. Paz', 'countrycode': 'ARG', 'district': 'Buenos Aires', 'population': 221754}, {
    'id': 100,
    'name': 'ParanÃ¡',
    'countrycode': 'ARG',
    'district': 'Entre Rios',
    'population': 207041
  }, {'id': 101, 'name': 'Godoy Cruz', 'countrycode': 'ARG', 'district': 'Mendoza', 'population': 206998}, {
    'id': 102,
    'name': 'Posadas',
    'countrycode': 'ARG',
    'district': 'Misiones',
    'population': 201273
  }, {'id': 103, 'name': 'GuaymallÃ©n', 'countrycode': 'ARG', 'district': 'Mendoza', 'population': 200595}, {
    'id': 104,
    'name': 'Santiago del Estero',
    'countrycode': 'ARG',
    'district': 'Santiago del Estero',
    'population': 189947
  }, {'id': 105, 'name': 'San Salvador de Jujuy', 'countrycode': 'ARG', 'district': 'Jujuy', 'population': 178748}, {
    'id': 106,
    'name': 'Hurlingham',
    'countrycode': 'ARG',
    'district': 'Buenos Aires',
    'population': 170028
  }, {'id': 107, 'name': 'NeuquÃ©n', 'countrycode': 'ARG', 'district': 'NeuquÃ©n', 'population': 167296}, {
    'id': 108,
    'name': 'ItuzaingÃ³',
    'countrycode': 'ARG',
    'district': 'Buenos Aires',
    'population': 158197
  }, {'id': 109, 'name': 'San Fernando', 'countrycode': 'ARG', 'district': 'Buenos Aires', 'population': 153036}, {
    'id': 110,
    'name': 'Formosa',
    'countrycode': 'ARG',
    'district': 'Formosa',
    'population': 147636
  }, {'id': 111, 'name': 'Las Heras', 'countrycode': 'ARG', 'district': 'Mendoza', 'population': 145823}, {
    'id': 112,
    'name': 'La Rioja',
    'countrycode': 'ARG',
    'district': 'La Rioja',
    'population': 138117
  }, {
    'id': 113,
    'name': 'San Fernando del Valle de Cata',
    'countrycode': 'ARG',
    'district': 'Catamarca',
    'population': 134935
  }, {'id': 114, 'name': 'RÃ­o Cuarto', 'countrycode': 'ARG', 'district': 'CÃ³rdoba', 'population': 134355}, {
    'id': 115,
    'name': 'Comodoro Rivadavia',
    'countrycode': 'ARG',
    'district': 'Chubut',
    'population': 124104
  }, {'id': 116, 'name': 'Mendoza', 'countrycode': 'ARG', 'district': 'Mendoza', 'population': 123027}, {
    'id': 117,
    'name': 'San NicolÃ¡s de los Arroyos',
    'countrycode': 'ARG',
    'district': 'Buenos Aires',
    'population': 119302
  }, {'id': 118, 'name': 'San Juan', 'countrycode': 'ARG', 'district': 'San Juan', 'population': 119152}, {
    'id': 119,
    'name': 'Escobar',
    'countrycode': 'ARG',
    'district': 'Buenos Aires',
    'population': 116675
  }, {'id': 120, 'name': 'Concordia', 'countrycode': 'ARG', 'district': 'Entre Rios', 'population': 116485}, {
    'id': 121,
    'name': 'Pilar',
    'countrycode': 'ARG',
    'district': 'Buenos Aires',
    'population': 113428
  }, {'id': 122, 'name': 'San Luis', 'countrycode': 'ARG', 'district': 'San Luis', 'population': 110136}, {
    'id': 123,
    'name': 'Ezeiza',
    'countrycode': 'ARG',
    'district': 'Buenos Aires',
    'population': 99578
  }, {'id': 124, 'name': 'San Rafael', 'countrycode': 'ARG', 'district': 'Mendoza', 'population': 94651}, {
    'id': 125,
    'name': 'Tandil',
    'countrycode': 'ARG',
    'district': 'Buenos Aires',
    'population': 91101
  }, {'id': 126, 'name': 'Yerevan', 'countrycode': 'ARM', 'district': 'Yerevan', 'population': 1248700}, {
    'id': 127,
    'name': 'Gjumri',
    'countrycode': 'ARM',
    'district': 'ÂŠirak',
    'population': 211700
  }, {'id': 128, 'name': 'Vanadzor', 'countrycode': 'ARM', 'district': 'Lori', 'population': 172700}, {
    'id': 129,
    'name': 'Oranjestad',
    'countrycode': 'ABW',
    'district': 'Â–',
    'population': 29034
  }, {'id': 130, 'name': 'Sydney', 'countrycode': 'AUS', 'district': 'New South Wales', 'population': 3276207}, {
    'id': 131,
    'name': 'Melbourne',
    'countrycode': 'AUS',
    'district': 'Victoria',
    'population': 2865329
  }, {'id': 132, 'name': 'Brisbane', 'countrycode': 'AUS', 'district': 'Queensland', 'population': 1291117}, {
    'id': 133,
    'name': 'Perth',
    'countrycode': 'AUS',
    'district': 'West Australia',
    'population': 1096829
  }, {'id': 134, 'name': 'Adelaide', 'countrycode': 'AUS', 'district': 'South Australia', 'population': 978100}, {
    'id': 135,
    'name': 'Canberra',
    'countrycode': 'AUS',
    'district': 'Capital Region',
    'population': 322723
  }, {'id': 136, 'name': 'Gold Coast', 'countrycode': 'AUS', 'district': 'Queensland', 'population': 311932}, {
    'id': 137,
    'name': 'Newcastle',
    'countrycode': 'AUS',
    'district': 'New South Wales',
    'population': 270324
  }, {'id': 138, 'name': 'Central Coast', 'countrycode': 'AUS', 'district': 'New South Wales', 'population': 227657}, {
    'id': 139,
    'name': 'Wollongong',
    'countrycode': 'AUS',
    'district': 'New South Wales',
    'population': 219761
  }, {'id': 140, 'name': 'Hobart', 'countrycode': 'AUS', 'district': 'Tasmania', 'population': 126118}, {
    'id': 141,
    'name': 'Geelong',
    'countrycode': 'AUS',
    'district': 'Victoria',
    'population': 125382
  }, {'id': 142, 'name': 'Townsville', 'countrycode': 'AUS', 'district': 'Queensland', 'population': 109914}, {
    'id': 143,
    'name': 'Cairns',
    'countrycode': 'AUS',
    'district': 'Queensland',
    'population': 92273
  }, {'id': 144, 'name': 'Baku', 'countrycode': 'AZE', 'district': 'Baki', 'population': 1787800}, {
    'id': 145,
    'name': 'GÃ¤ncÃ¤',
    'countrycode': 'AZE',
    'district': 'GÃ¤ncÃ¤',
    'population': 299300
  }, {'id': 146, 'name': 'Sumqayit', 'countrycode': 'AZE', 'district': 'Sumqayit', 'population': 283000}, {
    'id': 147,
    'name': 'MingÃ¤Ã§evir',
    'countrycode': 'AZE',
    'district': 'MingÃ¤Ã§evir',
    'population': 93900
  }, {'id': 148, 'name': 'Nassau', 'countrycode': 'BHS', 'district': 'New Providence', 'population': 172000}, {
    'id': 149,
    'name': 'al-Manama',
    'countrycode': 'BHR',
    'district': 'al-Manama',
    'population': 148000
  }, {'id': 150, 'name': 'Dhaka', 'countrycode': 'BGD', 'district': 'Dhaka', 'population': 3612850}, {
    'id': 151,
    'name': 'Chittagong',
    'countrycode': 'BGD',
    'district': 'Chittagong',
    'population': 1392860
  }, {'id': 152, 'name': 'Khulna', 'countrycode': 'BGD', 'district': 'Khulna', 'population': 663340}, {
    'id': 153,
    'name': 'Rajshahi',
    'countrycode': 'BGD',
    'district': 'Rajshahi',
    'population': 294056
  }, {'id': 154, 'name': 'Narayanganj', 'countrycode': 'BGD', 'district': 'Dhaka', 'population': 202134}, {
    'id': 155,
    'name': 'Rangpur',
    'countrycode': 'BGD',
    'district': 'Rajshahi',
    'population': 191398
  }, {'id': 156, 'name': 'Mymensingh', 'countrycode': 'BGD', 'district': 'Dhaka', 'population': 188713}, {
    'id': 157,
    'name': 'Barisal',
    'countrycode': 'BGD',
    'district': 'Barisal',
    'population': 170232
  }, {'id': 158, 'name': 'Tungi', 'countrycode': 'BGD', 'district': 'Dhaka', 'population': 168702}, {
    'id': 159,
    'name': 'Jessore',
    'countrycode': 'BGD',
    'district': 'Khulna',
    'population': 139710
  }, {'id': 160, 'name': 'Comilla', 'countrycode': 'BGD', 'district': 'Chittagong', 'population': 135313}, {
    'id': 161,
    'name': 'Nawabganj',
    'countrycode': 'BGD',
    'district': 'Rajshahi',
    'population': 130577
  }, {'id': 162, 'name': 'Dinajpur', 'countrycode': 'BGD', 'district': 'Rajshahi', 'population': 127815}, {
    'id': 163,
    'name': 'Bogra',
    'countrycode': 'BGD',
    'district': 'Rajshahi',
    'population': 120170
  }, {'id': 164, 'name': 'Sylhet', 'countrycode': 'BGD', 'district': 'Sylhet', 'population': 117396}, {
    'id': 165,
    'name': 'Brahmanbaria',
    'countrycode': 'BGD',
    'district': 'Chittagong',
    'population': 109032
  }, {'id': 166, 'name': 'Tangail', 'countrycode': 'BGD', 'district': 'Dhaka', 'population': 106004}, {
    'id': 167,
    'name': 'Jamalpur',
    'countrycode': 'BGD',
    'district': 'Dhaka',
    'population': 103556
  }, {'id': 168, 'name': 'Pabna', 'countrycode': 'BGD', 'district': 'Rajshahi', 'population': 103277}, {
    'id': 169,
    'name': 'Naogaon',
    'countrycode': 'BGD',
    'district': 'Rajshahi',
    'population': 101266
  }, {'id': 170, 'name': 'Sirajganj', 'countrycode': 'BGD', 'district': 'Rajshahi', 'population': 99669}, {
    'id': 171,
    'name': 'Narsinghdi',
    'countrycode': 'BGD',
    'district': 'Dhaka',
    'population': 98342
  }, {'id': 172, 'name': 'Saidpur', 'countrycode': 'BGD', 'district': 'Rajshahi', 'population': 96777}, {
    'id': 173,
    'name': 'Gazipur',
    'countrycode': 'BGD',
    'district': 'Dhaka',
    'population': 96717
  }, {'id': 174, 'name': 'Bridgetown', 'countrycode': 'BRB', 'district': 'St Michael', 'population': 6070}, {
    'id': 175,
    'name': 'Antwerpen',
    'countrycode': 'BEL',
    'district': 'Antwerpen',
    'population': 446525
  }, {'id': 176, 'name': 'Gent', 'countrycode': 'BEL', 'district': 'East Flanderi', 'population': 224180}, {
    'id': 177,
    'name': 'Charleroi',
    'countrycode': 'BEL',
    'district': 'Hainaut',
    'population': 200827
  }, {'id': 178, 'name': 'LiÃ¨ge', 'countrycode': 'BEL', 'district': 'LiÃ¨ge', 'population': 185639}, {
    'id': 179,
    'name': 'Bruxelles [Brussel]',
    'countrycode': 'BEL',
    'district': 'Bryssel',
    'population': 133859
  }, {'id': 180, 'name': 'Brugge', 'countrycode': 'BEL', 'district': 'West Flanderi', 'population': 116246}, {
    'id': 181,
    'name': 'Schaerbeek',
    'countrycode': 'BEL',
    'district': 'Bryssel',
    'population': 105692
  }, {'id': 182, 'name': 'Namur', 'countrycode': 'BEL', 'district': 'Namur', 'population': 105419}, {
    'id': 183,
    'name': 'Mons',
    'countrycode': 'BEL',
    'district': 'Hainaut',
    'population': 90935
  }, {'id': 184, 'name': 'Belize City', 'countrycode': 'BLZ', 'district': 'Belize City', 'population': 55810}, {
    'id': 185,
    'name': 'Belmopan',
    'countrycode': 'BLZ',
    'district': 'Cayo',
    'population': 7105
  }, {'id': 186, 'name': 'Cotonou', 'countrycode': 'BEN', 'district': 'Atlantique', 'population': 536827}, {
    'id': 187,
    'name': 'Porto-Novo',
    'countrycode': 'BEN',
    'district': 'OuÃ©mÃ©',
    'population': 194000
  }, {'id': 188, 'name': 'Djougou', 'countrycode': 'BEN', 'district': 'Atacora', 'population': 134099}, {
    'id': 189,
    'name': 'Parakou',
    'countrycode': 'BEN',
    'district': 'Borgou',
    'population': 103577
  }, {'id': 190, 'name': 'Saint George', 'countrycode': 'BMU', 'district': 'Saint GeorgeÂ´s', 'population': 1800}, {
    'id': 191,
    'name': 'Hamilton',
    'countrycode': 'BMU',
    'district': 'Hamilton',
    'population': 1200
  }, {'id': 192, 'name': 'Thimphu', 'countrycode': 'BTN', 'district': 'Thimphu', 'population': 22000}, {
    'id': 193,
    'name': 'Santa Cruz de la Sierra',
    'countrycode': 'BOL',
    'district': 'Santa Cruz',
    'population': 935361
  }, {'id': 194, 'name': 'La Paz', 'countrycode': 'BOL', 'district': 'La Paz', 'population': 758141}, {
    'id': 195,
    'name': 'El Alto',
    'countrycode': 'BOL',
    'district': 'La Paz',
    'population': 534466
  }, {'id': 196, 'name': 'Cochabamba', 'countrycode': 'BOL', 'district': 'Cochabamba', 'population': 482800}, {
    'id': 197,
    'name': 'Oruro',
    'countrycode': 'BOL',
    'district': 'Oruro',
    'population': 223553
  }, {'id': 198, 'name': 'Sucre', 'countrycode': 'BOL', 'district': 'Chuquisaca', 'population': 178426}, {
    'id': 199,
    'name': 'PotosÃ­',
    'countrycode': 'BOL',
    'district': 'PotosÃ­',
    'population': 140642
  }, {'id': 200, 'name': 'Tarija', 'countrycode': 'BOL', 'district': 'Tarija', 'population': 125255}, {
    'id': 201,
    'name': 'Sarajevo',
    'countrycode': 'BIH',
    'district': 'Federaatio',
    'population': 360000
  }, {'id': 202, 'name': 'Banja Luka', 'countrycode': 'BIH', 'district': 'Republika Srpska', 'population': 143079}, {
    'id': 203,
    'name': 'Zenica',
    'countrycode': 'BIH',
    'district': 'Federaatio',
    'population': 96027
  }, {'id': 204, 'name': 'Gaborone', 'countrycode': 'BWA', 'district': 'Gaborone', 'population': 213017}, {
    'id': 205,
    'name': 'Francistown',
    'countrycode': 'BWA',
    'district': 'Francistown',
    'population': 101805
  }, {'id': 206, 'name': 'SÃ£o Paulo', 'countrycode': 'BRA', 'district': 'SÃ£o Paulo', 'population': 9968485}, {
    'id': 207,
    'name': 'Rio de Janeiro',
    'countrycode': 'BRA',
    'district': 'Rio de Janeiro',
    'population': 5598953
  }, {'id': 208, 'name': 'Salvador', 'countrycode': 'BRA', 'district': 'Bahia', 'population': 2302832}, {
    'id': 209,
    'name': 'Belo Horizonte',
    'countrycode': 'BRA',
    'district': 'Minas Gerais',
    'population': 2139125
  }, {'id': 210, 'name': 'Fortaleza', 'countrycode': 'BRA', 'district': 'CearÃ¡', 'population': 2097757}, {
    'id': 211,
    'name': 'BrasÃ­lia',
    'countrycode': 'BRA',
    'district': 'Distrito Federal',
    'population': 1969868
  }, {'id': 212, 'name': 'Curitiba', 'countrycode': 'BRA', 'district': 'ParanÃ¡', 'population': 1584232}, {
    'id': 213,
    'name': 'Recife',
    'countrycode': 'BRA',
    'district': 'Pernambuco',
    'population': 1378087
  }, {'id': 214, 'name': 'Porto Alegre', 'countrycode': 'BRA', 'district': 'Rio Grande do Sul', 'population': 1314032}, {
    'id': 215,
    'name': 'Manaus',
    'countrycode': 'BRA',
    'district': 'Amazonas',
    'population': 1255049
  }, {'id': 216, 'name': 'BelÃ©m', 'countrycode': 'BRA', 'district': 'ParÃ¡', 'population': 1186926}, {
    'id': 217,
    'name': 'Guarulhos',
    'countrycode': 'BRA',
    'district': 'SÃ£o Paulo',
    'population': 1095874
  }, {'id': 218, 'name': 'GoiÃ¢nia', 'countrycode': 'BRA', 'district': 'GoiÃ¡s', 'population': 1056330}, {
    'id': 219,
    'name': 'Campinas',
    'countrycode': 'BRA',
    'district': 'SÃ£o Paulo',
    'population': 950043
  }, {'id': 220, 'name': 'SÃ£o GonÃ§alo', 'countrycode': 'BRA', 'district': 'Rio de Janeiro', 'population': 869254}, {
    'id': 221,
    'name': 'Nova IguaÃ§u',
    'countrycode': 'BRA',
    'district': 'Rio de Janeiro',
    'population': 862225
  }, {'id': 222, 'name': 'SÃ£o LuÃ­s', 'countrycode': 'BRA', 'district': 'MaranhÃ£o', 'population': 837588}, {
    'id': 223,
    'name': 'MaceiÃ³',
    'countrycode': 'BRA',
    'district': 'Alagoas',
    'population': 786288
  }, {'id': 224, 'name': 'Duque de Caxias', 'countrycode': 'BRA', 'district': 'Rio de Janeiro', 'population': 746758}, {
    'id': 225,
    'name': 'SÃ£o Bernardo do Campo',
    'countrycode': 'BRA',
    'district': 'SÃ£o Paulo',
    'population': 723132
  }, {'id': 226, 'name': 'Teresina', 'countrycode': 'BRA', 'district': 'PiauÃ­', 'population': 691942}, {
    'id': 227,
    'name': 'Natal',
    'countrycode': 'BRA',
    'district': 'Rio Grande do Norte',
    'population': 688955
  }, {'id': 228, 'name': 'Osasco', 'countrycode': 'BRA', 'district': 'SÃ£o Paulo', 'population': 659604}, {
    'id': 229,
    'name': 'Campo Grande',
    'countrycode': 'BRA',
    'district': 'Mato Grosso do Sul',
    'population': 649593
  }, {'id': 230, 'name': 'Santo AndrÃ©', 'countrycode': 'BRA', 'district': 'SÃ£o Paulo', 'population': 630073}, {
    'id': 231,
    'name': 'JoÃ£o Pessoa',
    'countrycode': 'BRA',
    'district': 'ParaÃ­ba',
    'population': 584029
  }, {'id': 232, 'name': 'JaboatÃ£o dos Guararapes', 'countrycode': 'BRA', 'district': 'Pernambuco', 'population': 558680}, {
    'id': 233,
    'name': 'Contagem',
    'countrycode': 'BRA',
    'district': 'Minas Gerais',
    'population': 520801
  }, {'id': 234, 'name': 'SÃ£o JosÃ© dos Campos', 'countrycode': 'BRA', 'district': 'SÃ£o Paulo', 'population': 515553}, {
    'id': 235,
    'name': 'UberlÃ¢ndia',
    'countrycode': 'BRA',
    'district': 'Minas Gerais',
    'population': 487222
  }, {'id': 236, 'name': 'Feira de Santana', 'countrycode': 'BRA', 'district': 'Bahia', 'population': 479992}, {
    'id': 237,
    'name': 'RibeirÃ£o Preto',
    'countrycode': 'BRA',
    'district': 'SÃ£o Paulo',
    'population': 473276
  }, {'id': 238, 'name': 'Sorocaba', 'countrycode': 'BRA', 'district': 'SÃ£o Paulo', 'population': 466823}, {
    'id': 239,
    'name': 'NiterÃ³i',
    'countrycode': 'BRA',
    'district': 'Rio de Janeiro',
    'population': 459884
  }, {'id': 240, 'name': 'CuiabÃ¡', 'countrycode': 'BRA', 'district': 'Mato Grosso', 'population': 453813}, {
    'id': 241,
    'name': 'Juiz de Fora',
    'countrycode': 'BRA',
    'district': 'Minas Gerais',
    'population': 450288
  }, {'id': 242, 'name': 'Aracaju', 'countrycode': 'BRA', 'district': 'Sergipe', 'population': 445555}, {
    'id': 243,
    'name': 'SÃ£o JoÃ£o de Meriti',
    'countrycode': 'BRA',
    'district': 'Rio de Janeiro',
    'population': 440052
  }, {'id': 244, 'name': 'Londrina', 'countrycode': 'BRA', 'district': 'ParanÃ¡', 'population': 432257}, {
    'id': 245,
    'name': 'Joinville',
    'countrycode': 'BRA',
    'district': 'Santa Catarina',
    'population': 428011
  }, {'id': 246, 'name': 'Belford Roxo', 'countrycode': 'BRA', 'district': 'Rio de Janeiro', 'population': 425194}, {
    'id': 247,
    'name': 'Santos',
    'countrycode': 'BRA',
    'district': 'SÃ£o Paulo',
    'population': 408748
  }, {'id': 248, 'name': 'Ananindeua', 'countrycode': 'BRA', 'district': 'ParÃ¡', 'population': 400940}, {
    'id': 249,
    'name': 'Campos dos Goytacazes',
    'countrycode': 'BRA',
    'district': 'Rio de Janeiro',
    'population': 398418
  }, {'id': 250, 'name': 'MauÃ¡', 'countrycode': 'BRA', 'district': 'SÃ£o Paulo', 'population': 375055}, {
    'id': 251,
    'name': 'CarapicuÃ­ba',
    'countrycode': 'BRA',
    'district': 'SÃ£o Paulo',
    'population': 357552
  }, {'id': 252, 'name': 'Olinda', 'countrycode': 'BRA', 'district': 'Pernambuco', 'population': 354732}, {
    'id': 253,
    'name': 'Campina Grande',
    'countrycode': 'BRA',
    'district': 'ParaÃ­ba',
    'population': 352497
  }, {'id': 254, 'name': 'SÃ£o JosÃ© do Rio Preto', 'countrycode': 'BRA', 'district': 'SÃ£o Paulo', 'population': 351944}, {
    'id': 255,
    'name': 'Caxias do Sul',
    'countrycode': 'BRA',
    'district': 'Rio Grande do Sul',
    'population': 349581
  }, {'id': 256, 'name': 'Moji das Cruzes', 'countrycode': 'BRA', 'district': 'SÃ£o Paulo', 'population': 339194}, {
    'id': 257,
    'name': 'Diadema',
    'countrycode': 'BRA',
    'district': 'SÃ£o Paulo',
    'population': 335078
  }, {'id': 258, 'name': 'Aparecida de GoiÃ¢nia', 'countrycode': 'BRA', 'district': 'GoiÃ¡s', 'population': 324662}, {
    'id': 259,
    'name': 'Piracicaba',
    'countrycode': 'BRA',
    'district': 'SÃ£o Paulo',
    'population': 319104
  }, {'id': 260, 'name': 'Cariacica', 'countrycode': 'BRA', 'district': 'EspÃ­rito Santo', 'population': 319033}, {
    'id': 261,
    'name': 'Vila Velha',
    'countrycode': 'BRA',
    'district': 'EspÃ­rito Santo',
    'population': 318758
  }, {'id': 262, 'name': 'Pelotas', 'countrycode': 'BRA', 'district': 'Rio Grande do Sul', 'population': 315415}, {
    'id': 263,
    'name': 'Bauru',
    'countrycode': 'BRA',
    'district': 'SÃ£o Paulo',
    'population': 313670
  }, {'id': 264, 'name': 'Porto Velho', 'countrycode': 'BRA', 'district': 'RondÃ´nia', 'population': 309750}, {
    'id': 265,
    'name': 'Serra',
    'countrycode': 'BRA',
    'district': 'EspÃ­rito Santo',
    'population': 302666
  }, {'id': 266, 'name': 'Betim', 'countrycode': 'BRA', 'district': 'Minas Gerais', 'population': 302108}, {
    'id': 267,
    'name': 'JundÃ­aÃ­',
    'countrycode': 'BRA',
    'district': 'SÃ£o Paulo',
    'population': 296127
  }, {'id': 268, 'name': 'Canoas', 'countrycode': 'BRA', 'district': 'Rio Grande do Sul', 'population': 294125}, {
    'id': 269,
    'name': 'Franca',
    'countrycode': 'BRA',
    'district': 'SÃ£o Paulo',
    'population': 290139
  }, {'id': 270, 'name': 'SÃ£o Vicente', 'countrycode': 'BRA', 'district': 'SÃ£o Paulo', 'population': 286848}, {
    'id': 271,
    'name': 'MaringÃ¡',
    'countrycode': 'BRA',
    'district': 'ParanÃ¡',
    'population': 286461
  }, {'id': 272, 'name': 'Montes Claros', 'countrycode': 'BRA', 'district': 'Minas Gerais', 'population': 286058}, {
    'id': 273,
    'name': 'AnÃ¡polis',
    'countrycode': 'BRA',
    'district': 'GoiÃ¡s',
    'population': 282197
  }, {'id': 274, 'name': 'FlorianÃ³polis', 'countrycode': 'BRA', 'district': 'Santa Catarina', 'population': 281928}, {
    'id': 275,
    'name': 'PetrÃ³polis',
    'countrycode': 'BRA',
    'district': 'Rio de Janeiro',
    'population': 279183
  }, {'id': 276, 'name': 'Itaquaquecetuba', 'countrycode': 'BRA', 'district': 'SÃ£o Paulo', 'population': 270874}, {
    'id': 277,
    'name': 'VitÃ³ria',
    'countrycode': 'BRA',
    'district': 'EspÃ­rito Santo',
    'population': 270626
  }, {'id': 278, 'name': 'Ponta Grossa', 'countrycode': 'BRA', 'district': 'ParanÃ¡', 'population': 268013}, {
    'id': 279,
    'name': 'Rio Branco',
    'countrycode': 'BRA',
    'district': 'Acre',
    'population': 259537
  }, {'id': 280, 'name': 'Foz do IguaÃ§u', 'countrycode': 'BRA', 'district': 'ParanÃ¡', 'population': 259425}, {
    'id': 281,
    'name': 'MacapÃ¡',
    'countrycode': 'BRA',
    'district': 'AmapÃ¡',
    'population': 256033
  }, {'id': 282, 'name': 'IlhÃ©us', 'countrycode': 'BRA', 'district': 'Bahia', 'population': 254970}, {
    'id': 283,
    'name': 'VitÃ³ria da Conquista',
    'countrycode': 'BRA',
    'district': 'Bahia',
    'population': 253587
  }, {'id': 284, 'name': 'Uberaba', 'countrycode': 'BRA', 'district': 'Minas Gerais', 'population': 249225}, {
    'id': 285,
    'name': 'Paulista',
    'countrycode': 'BRA',
    'district': 'Pernambuco',
    'population': 248473
  }, {'id': 286, 'name': 'Limeira', 'countrycode': 'BRA', 'district': 'SÃ£o Paulo', 'population': 245497}, {
    'id': 287,
    'name': 'Blumenau',
    'countrycode': 'BRA',
    'district': 'Santa Catarina',
    'population': 244379
  }, {'id': 288, 'name': 'Caruaru', 'countrycode': 'BRA', 'district': 'Pernambuco', 'population': 244247}, {
    'id': 289,
    'name': 'SantarÃ©m',
    'countrycode': 'BRA',
    'district': 'ParÃ¡',
    'population': 241771
  }, {'id': 290, 'name': 'Volta Redonda', 'countrycode': 'BRA', 'district': 'Rio de Janeiro', 'population': 240315}, {
    'id': 291,
    'name': 'Novo Hamburgo',
    'countrycode': 'BRA',
    'district': 'Rio Grande do Sul',
    'population': 239940
  }, {'id': 292, 'name': 'Caucaia', 'countrycode': 'BRA', 'district': 'CearÃ¡', 'population': 238738}, {
    'id': 293,
    'name': 'Santa Maria',
    'countrycode': 'BRA',
    'district': 'Rio Grande do Sul',
    'population': 238473
  }, {'id': 294, 'name': 'Cascavel', 'countrycode': 'BRA', 'district': 'ParanÃ¡', 'population': 237510}, {
    'id': 295,
    'name': 'GuarujÃ¡',
    'countrycode': 'BRA',
    'district': 'SÃ£o Paulo',
    'population': 237206
  }, {'id': 296, 'name': 'RibeirÃ£o das Neves', 'countrycode': 'BRA', 'district': 'Minas Gerais', 'population': 232685}, {
    'id': 297,
    'name': 'Governador Valadares',
    'countrycode': 'BRA',
    'district': 'Minas Gerais',
    'population': 231724
  }, {'id': 298, 'name': 'TaubatÃ©', 'countrycode': 'BRA', 'district': 'SÃ£o Paulo', 'population': 229130}, {
    'id': 299,
    'name': 'Imperatriz',
    'countrycode': 'BRA',
    'district': 'MaranhÃ£o',
    'population': 224564
  }, {'id': 300, 'name': 'GravataÃ­', 'countrycode': 'BRA', 'district': 'Rio Grande do Sul', 'population': 223011}, {
    'id': 301,
    'name': 'Embu',
    'countrycode': 'BRA',
    'district': 'SÃ£o Paulo',
    'population': 222223
  }, {'id': 302, 'name': 'MossorÃ³', 'countrycode': 'BRA', 'district': 'Rio Grande do Norte', 'population': 214901}, {
    'id': 303,
    'name': 'VÃ¡rzea Grande',
    'countrycode': 'BRA',
    'district': 'Mato Grosso',
    'population': 214435
  }, {'id': 304, 'name': 'Petrolina', 'countrycode': 'BRA', 'district': 'Pernambuco', 'population': 210540}, {
    'id': 305,
    'name': 'Barueri',
    'countrycode': 'BRA',
    'district': 'SÃ£o Paulo',
    'population': 208426
  }, {'id': 306, 'name': 'ViamÃ£o', 'countrycode': 'BRA', 'district': 'Rio Grande do Sul', 'population': 207557}, {
    'id': 307,
    'name': 'Ipatinga',
    'countrycode': 'BRA',
    'district': 'Minas Gerais',
    'population': 206338
  }, {'id': 308, 'name': 'Juazeiro', 'countrycode': 'BRA', 'district': 'Bahia', 'population': 201073}, {
    'id': 309,
    'name': 'Juazeiro do Norte',
    'countrycode': 'BRA',
    'district': 'CearÃ¡',
    'population': 199636
  }, {'id': 310, 'name': 'TaboÃ£o da Serra', 'countrycode': 'BRA', 'district': 'SÃ£o Paulo', 'population': 197550}, {
    'id': 311,
    'name': 'SÃ£o JosÃ© dos Pinhais',
    'countrycode': 'BRA',
    'district': 'ParanÃ¡',
    'population': 196884
  }, {'id': 312, 'name': 'MagÃ©', 'countrycode': 'BRA', 'district': 'Rio de Janeiro', 'population': 196147}, {
    'id': 313,
    'name': 'Suzano',
    'countrycode': 'BRA',
    'district': 'SÃ£o Paulo',
    'population': 195434
  }, {'id': 314, 'name': 'SÃ£o Leopoldo', 'countrycode': 'BRA', 'district': 'Rio Grande do Sul', 'population': 189258}, {
    'id': 315,
    'name': 'MarÃ­lia',
    'countrycode': 'BRA',
    'district': 'SÃ£o Paulo',
    'population': 188691
  }, {'id': 316, 'name': 'SÃ£o Carlos', 'countrycode': 'BRA', 'district': 'SÃ£o Paulo', 'population': 187122}, {
    'id': 317,
    'name': 'SumarÃ©',
    'countrycode': 'BRA',
    'district': 'SÃ£o Paulo',
    'population': 186205
  }, {'id': 318, 'name': 'Presidente Prudente', 'countrycode': 'BRA', 'district': 'SÃ£o Paulo', 'population': 185340}, {
    'id': 319,
    'name': 'DivinÃ³polis',
    'countrycode': 'BRA',
    'district': 'Minas Gerais',
    'population': 185047
  }, {'id': 320, 'name': 'Sete Lagoas', 'countrycode': 'BRA', 'district': 'Minas Gerais', 'population': 182984}, {
    'id': 321,
    'name': 'Rio Grande',
    'countrycode': 'BRA',
    'district': 'Rio Grande do Sul',
    'population': 182222
  }, {'id': 322, 'name': 'Itabuna', 'countrycode': 'BRA', 'district': 'Bahia', 'population': 182148}, {
    'id': 323,
    'name': 'JequiÃ©',
    'countrycode': 'BRA',
    'district': 'Bahia',
    'population': 179128
  }, {'id': 324, 'name': 'Arapiraca', 'countrycode': 'BRA', 'district': 'Alagoas', 'population': 178988}, {
    'id': 325,
    'name': 'Colombo',
    'countrycode': 'BRA',
    'district': 'ParanÃ¡',
    'population': 177764
  }, {'id': 326, 'name': 'Americana', 'countrycode': 'BRA', 'district': 'SÃ£o Paulo', 'population': 177409}, {
    'id': 327,
    'name': 'Alvorada',
    'countrycode': 'BRA',
    'district': 'Rio Grande do Sul',
    'population': 175574
  }, {'id': 328, 'name': 'Araraquara', 'countrycode': 'BRA', 'district': 'SÃ£o Paulo', 'population': 174381}, {
    'id': 329,
    'name': 'ItaboraÃ­',
    'countrycode': 'BRA',
    'district': 'Rio de Janeiro',
    'population': 173977
  }, {'id': 330, 'name': 'Santa BÃ¡rbara dÂ´Oeste', 'countrycode': 'BRA', 'district': 'SÃ£o Paulo', 'population': 171657}, {
    'id': 331,
    'name': 'Nova Friburgo',
    'countrycode': 'BRA',
    'district': 'Rio de Janeiro',
    'population': 170697
  }, {'id': 332, 'name': 'JacareÃ­', 'countrycode': 'BRA', 'district': 'SÃ£o Paulo', 'population': 170356}, {
    'id': 333,
    'name': 'AraÃ§atuba',
    'countrycode': 'BRA',
    'district': 'SÃ£o Paulo',
    'population': 169303
  }, {'id': 334, 'name': 'Barra Mansa', 'countrycode': 'BRA', 'district': 'Rio de Janeiro', 'population': 168953}, {
    'id': 335,
    'name': 'Praia Grande',
    'countrycode': 'BRA',
    'district': 'SÃ£o Paulo',
    'population': 168434
  }, {'id': 336, 'name': 'MarabÃ¡', 'countrycode': 'BRA', 'district': 'ParÃ¡', 'population': 167795}, {
    'id': 337,
    'name': 'CriciÃºma',
    'countrycode': 'BRA',
    'district': 'Santa Catarina',
    'population': 167661
  }, {'id': 338, 'name': 'Boa Vista', 'countrycode': 'BRA', 'district': 'Roraima', 'population': 167185}, {
    'id': 339,
    'name': 'Passo Fundo',
    'countrycode': 'BRA',
    'district': 'Rio Grande do Sul',
    'population': 166343
  }, {'id': 340, 'name': 'Dourados', 'countrycode': 'BRA', 'district': 'Mato Grosso do Sul', 'population': 164716}, {
    'id': 341,
    'name': 'Santa Luzia',
    'countrycode': 'BRA',
    'district': 'Minas Gerais',
    'population': 164704
  }, {'id': 342, 'name': 'Rio Claro', 'countrycode': 'BRA', 'district': 'SÃ£o Paulo', 'population': 163551}, {
    'id': 343,
    'name': 'MaracanaÃº',
    'countrycode': 'BRA',
    'district': 'CearÃ¡',
    'population': 162022
  }, {'id': 344, 'name': 'Guarapuava', 'countrycode': 'BRA', 'district': 'ParanÃ¡', 'population': 160510}, {
    'id': 345,
    'name': 'RondonÃ³polis',
    'countrycode': 'BRA',
    'district': 'Mato Grosso',
    'population': 155115
  }, {'id': 346, 'name': 'SÃ£o JosÃ©', 'countrycode': 'BRA', 'district': 'Santa Catarina', 'population': 155105}, {
    'id': 347,
    'name': 'Cachoeiro de Itapemirim',
    'countrycode': 'BRA',
    'district': 'EspÃ­rito Santo',
    'population': 155024
  }, {'id': 348, 'name': 'NilÃ³polis', 'countrycode': 'BRA', 'district': 'Rio de Janeiro', 'population': 153383}, {
    'id': 349,
    'name': 'Itapevi',
    'countrycode': 'BRA',
    'district': 'SÃ£o Paulo',
    'population': 150664
  }, {'id': 350, 'name': 'Cabo de Santo Agostinho', 'countrycode': 'BRA', 'district': 'Pernambuco', 'population': 149964}, {
    'id': 351,
    'name': 'CamaÃ§ari',
    'countrycode': 'BRA',
    'district': 'Bahia',
    'population': 149146
  }, {'id': 352, 'name': 'Sobral', 'countrycode': 'BRA', 'district': 'CearÃ¡', 'population': 146005}, {
    'id': 353,
    'name': 'ItajaÃ­',
    'countrycode': 'BRA',
    'district': 'Santa Catarina',
    'population': 145197
  }, {'id': 354, 'name': 'ChapecÃ³', 'countrycode': 'BRA', 'district': 'Santa Catarina', 'population': 144158}, {
    'id': 355,
    'name': 'Cotia',
    'countrycode': 'BRA',
    'district': 'SÃ£o Paulo',
    'population': 140042
  }, {'id': 356, 'name': 'Lages', 'countrycode': 'BRA', 'district': 'Santa Catarina', 'population': 139570}, {
    'id': 357,
    'name': 'Ferraz de Vasconcelos',
    'countrycode': 'BRA',
    'district': 'SÃ£o Paulo',
    'population': 139283
  }, {'id': 358, 'name': 'Indaiatuba', 'countrycode': 'BRA', 'district': 'SÃ£o Paulo', 'population': 135968}, {
    'id': 359,
    'name': 'HortolÃ¢ndia',
    'countrycode': 'BRA',
    'district': 'SÃ£o Paulo',
    'population': 135755
  }, {'id': 360, 'name': 'Caxias', 'countrycode': 'BRA', 'district': 'MaranhÃ£o', 'population': 133980}, {
    'id': 361,
    'name': 'SÃ£o Caetano do Sul',
    'countrycode': 'BRA',
    'district': 'SÃ£o Paulo',
    'population': 133321
  }, {'id': 362, 'name': 'Itu', 'countrycode': 'BRA', 'district': 'SÃ£o Paulo', 'population': 132736}, {
    'id': 363,
    'name': 'Nossa Senhora do Socorro',
    'countrycode': 'BRA',
    'district': 'Sergipe',
    'population': 131351
  }, {'id': 364, 'name': 'ParnaÃ­ba', 'countrycode': 'BRA', 'district': 'PiauÃ­', 'population': 129756}, {
    'id': 365,
    'name': 'PoÃ§os de Caldas',
    'countrycode': 'BRA',
    'district': 'Minas Gerais',
    'population': 129683
  }, {'id': 366, 'name': 'TeresÃ³polis', 'countrycode': 'BRA', 'district': 'Rio de Janeiro', 'population': 128079}, {
    'id': 367,
    'name': 'Barreiras',
    'countrycode': 'BRA',
    'district': 'Bahia',
    'population': 127801
  }, {'id': 368, 'name': 'Castanhal', 'countrycode': 'BRA', 'district': 'ParÃ¡', 'population': 127634}, {
    'id': 369,
    'name': 'Alagoinhas',
    'countrycode': 'BRA',
    'district': 'Bahia',
    'population': 126820
  }, {'id': 370, 'name': 'Itapecerica da Serra', 'countrycode': 'BRA', 'district': 'SÃ£o Paulo', 'population': 126672}, {
    'id': 371,
    'name': 'Uruguaiana',
    'countrycode': 'BRA',
    'district': 'Rio Grande do Sul',
    'population': 126305
  }, {'id': 372, 'name': 'ParanaguÃ¡', 'countrycode': 'BRA', 'district': 'ParanÃ¡', 'population': 126076}, {
    'id': 373,
    'name': 'IbiritÃ©',
    'countrycode': 'BRA',
    'district': 'Minas Gerais',
    'population': 125982
  }, {'id': 374, 'name': 'Timon', 'countrycode': 'BRA', 'district': 'MaranhÃ£o', 'population': 125812}, {
    'id': 375,
    'name': 'LuziÃ¢nia',
    'countrycode': 'BRA',
    'district': 'GoiÃ¡s',
    'population': 125597
  }, {'id': 376, 'name': 'MacaÃ©', 'countrycode': 'BRA', 'district': 'Rio de Janeiro', 'population': 125597}, {
    'id': 377,
    'name': 'TeÃ³filo Otoni',
    'countrycode': 'BRA',
    'district': 'Minas Gerais',
    'population': 124489
  }, {'id': 378, 'name': 'Moji-GuaÃ§u', 'countrycode': 'BRA', 'district': 'SÃ£o Paulo', 'population': 123782}, {
    'id': 379,
    'name': 'Palmas',
    'countrycode': 'BRA',
    'district': 'Tocantins',
    'population': 121919
  }, {'id': 380, 'name': 'Pindamonhangaba', 'countrycode': 'BRA', 'district': 'SÃ£o Paulo', 'population': 121904}, {
    'id': 381,
    'name': 'Francisco Morato',
    'countrycode': 'BRA',
    'district': 'SÃ£o Paulo',
    'population': 121197
  }, {'id': 382, 'name': 'BagÃ©', 'countrycode': 'BRA', 'district': 'Rio Grande do Sul', 'population': 120793}, {
    'id': 383,
    'name': 'Sapucaia do Sul',
    'countrycode': 'BRA',
    'district': 'Rio Grande do Sul',
    'population': 120217
  }, {'id': 384, 'name': 'Cabo Frio', 'countrycode': 'BRA', 'district': 'Rio de Janeiro', 'population': 119503}, {
    'id': 385,
    'name': 'Itapetininga',
    'countrycode': 'BRA',
    'district': 'SÃ£o Paulo',
    'population': 119391
  }, {'id': 386, 'name': 'Patos de Minas', 'countrycode': 'BRA', 'district': 'Minas Gerais', 'population': 119262}, {
    'id': 387,
    'name': 'Camaragibe',
    'countrycode': 'BRA',
    'district': 'Pernambuco',
    'population': 118968
  }, {'id': 388, 'name': 'BraganÃ§a Paulista', 'countrycode': 'BRA', 'district': 'SÃ£o Paulo', 'population': 116929}, {
    'id': 389,
    'name': 'Queimados',
    'countrycode': 'BRA',
    'district': 'Rio de Janeiro',
    'population': 115020
  }, {'id': 390, 'name': 'AraguaÃ­na', 'countrycode': 'BRA', 'district': 'Tocantins', 'population': 114948}, {
    'id': 391,
    'name': 'Garanhuns',
    'countrycode': 'BRA',
    'district': 'Pernambuco',
    'population': 114603
  }, {'id': 392, 'name': 'VitÃ³ria de Santo AntÃ£o', 'countrycode': 'BRA', 'district': 'Pernambuco', 'population': 113595}, {
    'id': 393,
    'name': 'Santa Rita',
    'countrycode': 'BRA',
    'district': 'ParaÃ­ba',
    'population': 113135
  }, {'id': 394, 'name': 'Barbacena', 'countrycode': 'BRA', 'district': 'Minas Gerais', 'population': 113079}, {
    'id': 395,
    'name': 'Abaetetuba',
    'countrycode': 'BRA',
    'district': 'ParÃ¡',
    'population': 111258
  }, {'id': 396, 'name': 'JaÃº', 'countrycode': 'BRA', 'district': 'SÃ£o Paulo', 'population': 109965}, {
    'id': 397,
    'name': 'Lauro de Freitas',
    'countrycode': 'BRA',
    'district': 'Bahia',
    'population': 109236
  }, {'id': 398, 'name': 'Franco da Rocha', 'countrycode': 'BRA', 'district': 'SÃ£o Paulo', 'population': 108964}, {
    'id': 399,
    'name': 'Teixeira de Freitas',
    'countrycode': 'BRA',
    'district': 'Bahia',
    'population': 108441
  }, {'id': 400, 'name': 'Varginha', 'countrycode': 'BRA', 'district': 'Minas Gerais', 'population': 108314}, {
    'id': 401,
    'name': 'RibeirÃ£o Pires',
    'countrycode': 'BRA',
    'district': 'SÃ£o Paulo',
    'population': 108121
  }, {'id': 402, 'name': 'SabarÃ¡', 'countrycode': 'BRA', 'district': 'Minas Gerais', 'population': 107781}, {
    'id': 403,
    'name': 'Catanduva',
    'countrycode': 'BRA',
    'district': 'SÃ£o Paulo',
    'population': 107761
  }, {'id': 404, 'name': 'Rio Verde', 'countrycode': 'BRA', 'district': 'GoiÃ¡s', 'population': 107755}, {
    'id': 405,
    'name': 'Botucatu',
    'countrycode': 'BRA',
    'district': 'SÃ£o Paulo',
    'population': 107663
  }, {'id': 406, 'name': 'Colatina', 'countrycode': 'BRA', 'district': 'EspÃ­rito Santo', 'population': 107354}, {
    'id': 407,
    'name': 'Santa Cruz do Sul',
    'countrycode': 'BRA',
    'district': 'Rio Grande do Sul',
    'population': 106734
  }, {'id': 408, 'name': 'Linhares', 'countrycode': 'BRA', 'district': 'EspÃ­rito Santo', 'population': 106278}, {
    'id': 409,
    'name': 'Apucarana',
    'countrycode': 'BRA',
    'district': 'ParanÃ¡',
    'population': 105114
  }, {'id': 410, 'name': 'Barretos', 'countrycode': 'BRA', 'district': 'SÃ£o Paulo', 'population': 104156}, {
    'id': 411,
    'name': 'GuaratinguetÃ¡',
    'countrycode': 'BRA',
    'district': 'SÃ£o Paulo',
    'population': 103433
  }, {'id': 412, 'name': 'Cachoeirinha', 'countrycode': 'BRA', 'district': 'Rio Grande do Sul', 'population': 103240}, {
    'id': 413,
    'name': 'CodÃ³',
    'countrycode': 'BRA',
    'district': 'MaranhÃ£o',
    'population': 103153
  }, {'id': 414, 'name': 'JaraguÃ¡ do Sul', 'countrycode': 'BRA', 'district': 'Santa Catarina', 'population': 102580}, {
    'id': 415,
    'name': 'CubatÃ£o',
    'countrycode': 'BRA',
    'district': 'SÃ£o Paulo',
    'population': 102372
  }, {'id': 416, 'name': 'Itabira', 'countrycode': 'BRA', 'district': 'Minas Gerais', 'population': 102217}, {
    'id': 417,
    'name': 'Itaituba',
    'countrycode': 'BRA',
    'district': 'ParÃ¡',
    'population': 101320
  }, {'id': 418, 'name': 'Araras', 'countrycode': 'BRA', 'district': 'SÃ£o Paulo', 'population': 101046}, {
    'id': 419,
    'name': 'Resende',
    'countrycode': 'BRA',
    'district': 'Rio de Janeiro',
    'population': 100627
  }, {'id': 420, 'name': 'Atibaia', 'countrycode': 'BRA', 'district': 'SÃ£o Paulo', 'population': 100356}, {
    'id': 421,
    'name': 'Pouso Alegre',
    'countrycode': 'BRA',
    'district': 'Minas Gerais',
    'population': 100028
  }, {'id': 422, 'name': 'Toledo', 'countrycode': 'BRA', 'district': 'ParanÃ¡', 'population': 99387}, {
    'id': 423,
    'name': 'Crato',
    'countrycode': 'BRA',
    'district': 'CearÃ¡',
    'population': 98965
  }, {'id': 424, 'name': 'Passos', 'countrycode': 'BRA', 'district': 'Minas Gerais', 'population': 98570}, {
    'id': 425,
    'name': 'Araguari',
    'countrycode': 'BRA',
    'district': 'Minas Gerais',
    'population': 98399
  }, {'id': 426, 'name': 'SÃ£o JosÃ© de Ribamar', 'countrycode': 'BRA', 'district': 'MaranhÃ£o', 'population': 98318}, {
    'id': 427,
    'name': 'Pinhais',
    'countrycode': 'BRA',
    'district': 'ParanÃ¡',
    'population': 98198
  }, {'id': 428, 'name': 'SertÃ£ozinho', 'countrycode': 'BRA', 'district': 'SÃ£o Paulo', 'population': 98140}, {
    'id': 429,
    'name': 'Conselheiro Lafaiete',
    'countrycode': 'BRA',
    'district': 'Minas Gerais',
    'population': 97507
  }, {'id': 430, 'name': 'Paulo Afonso', 'countrycode': 'BRA', 'district': 'Bahia', 'population': 97291}, {
    'id': 431,
    'name': 'Angra dos Reis',
    'countrycode': 'BRA',
    'district': 'Rio de Janeiro',
    'population': 96864
  }, {'id': 432, 'name': 'EunÃ¡polis', 'countrycode': 'BRA', 'district': 'Bahia', 'population': 96610}, {
    'id': 433,
    'name': 'Salto',
    'countrycode': 'BRA',
    'district': 'SÃ£o Paulo',
    'population': 96348
  }, {'id': 434, 'name': 'Ourinhos', 'countrycode': 'BRA', 'district': 'SÃ£o Paulo', 'population': 96291}, {
    'id': 435,
    'name': 'Parnamirim',
    'countrycode': 'BRA',
    'district': 'Rio Grande do Norte',
    'population': 96210
  }, {'id': 436, 'name': 'Jacobina', 'countrycode': 'BRA', 'district': 'Bahia', 'population': 96131}, {
    'id': 437,
    'name': 'Coronel Fabriciano',
    'countrycode': 'BRA',
    'district': 'Minas Gerais',
    'population': 95933
  }, {'id': 438, 'name': 'Birigui', 'countrycode': 'BRA', 'district': 'SÃ£o Paulo', 'population': 94685}, {
    'id': 439,
    'name': 'TatuÃ­',
    'countrycode': 'BRA',
    'district': 'SÃ£o Paulo',
    'population': 93897
  }, {'id': 440, 'name': 'Ji-ParanÃ¡', 'countrycode': 'BRA', 'district': 'RondÃ´nia', 'population': 93346}, {
    'id': 441,
    'name': 'Bacabal',
    'countrycode': 'BRA',
    'district': 'MaranhÃ£o',
    'population': 93121
  }, {'id': 442, 'name': 'CametÃ¡', 'countrycode': 'BRA', 'district': 'ParÃ¡', 'population': 92779}, {
    'id': 443,
    'name': 'GuaÃ­ba',
    'countrycode': 'BRA',
    'district': 'Rio Grande do Sul',
    'population': 92224
  }, {'id': 444, 'name': 'SÃ£o LourenÃ§o da Mata', 'countrycode': 'BRA', 'district': 'Pernambuco', 'population': 91999}, {
    'id': 445,
    'name': 'Santana do Livramento',
    'countrycode': 'BRA',
    'district': 'Rio Grande do Sul',
    'population': 91779
  }, {'id': 446, 'name': 'Votorantim', 'countrycode': 'BRA', 'district': 'SÃ£o Paulo', 'population': 91777}, {
    'id': 447,
    'name': 'Campo Largo',
    'countrycode': 'BRA',
    'district': 'ParanÃ¡',
    'population': 91203
  }, {'id': 448, 'name': 'Patos', 'countrycode': 'BRA', 'district': 'ParaÃ­ba', 'population': 90519}, {
    'id': 449,
    'name': 'Ituiutaba',
    'countrycode': 'BRA',
    'district': 'Minas Gerais',
    'population': 90507
  }, {'id': 450, 'name': 'CorumbÃ¡', 'countrycode': 'BRA', 'district': 'Mato Grosso do Sul', 'population': 90111}, {
    'id': 451,
    'name': 'PalhoÃ§a',
    'countrycode': 'BRA',
    'district': 'Santa Catarina',
    'population': 89465
  }, {'id': 452, 'name': 'Barra do PiraÃ­', 'countrycode': 'BRA', 'district': 'Rio de Janeiro', 'population': 89388}, {
    'id': 453,
    'name': 'Bento GonÃ§alves',
    'countrycode': 'BRA',
    'district': 'Rio Grande do Sul',
    'population': 89254
  }, {'id': 454, 'name': 'PoÃ¡', 'countrycode': 'BRA', 'district': 'SÃ£o Paulo', 'population': 89236}, {
    'id': 455,
    'name': 'Ãguas Lindas de GoiÃ¡s',
    'countrycode': 'BRA',
    'district': 'GoiÃ¡s',
    'population': 89200
  }, {'id': 456, 'name': 'London', 'countrycode': 'GBR', 'district': 'England', 'population': 7285000}, {
    'id': 457,
    'name': 'Birmingham',
    'countrycode': 'GBR',
    'district': 'England',
    'population': 1013000
  }, {'id': 458, 'name': 'Glasgow', 'countrycode': 'GBR', 'district': 'Scotland', 'population': 619680}, {
    'id': 459,
    'name': 'Liverpool',
    'countrycode': 'GBR',
    'district': 'England',
    'population': 461000
  }, {'id': 460, 'name': 'Edinburgh', 'countrycode': 'GBR', 'district': 'Scotland', 'population': 450180}, {
    'id': 461,
    'name': 'Sheffield',
    'countrycode': 'GBR',
    'district': 'England',
    'population': 431607
  }, {'id': 462, 'name': 'Manchester', 'countrycode': 'GBR', 'district': 'England', 'population': 430000}, {
    'id': 463,
    'name': 'Leeds',
    'countrycode': 'GBR',
    'district': 'England',
    'population': 424194
  }, {'id': 464, 'name': 'Bristol', 'countrycode': 'GBR', 'district': 'England', 'population': 402000}, {
    'id': 465,
    'name': 'Cardiff',
    'countrycode': 'GBR',
    'district': 'Wales',
    'population': 321000
  }, {'id': 466, 'name': 'Coventry', 'countrycode': 'GBR', 'district': 'England', 'population': 304000}, {
    'id': 467,
    'name': 'Leicester',
    'countrycode': 'GBR',
    'district': 'England',
    'population': 294000
  }, {'id': 468, 'name': 'Bradford', 'countrycode': 'GBR', 'district': 'England', 'population': 289376}, {
    'id': 469,
    'name': 'Belfast',
    'countrycode': 'GBR',
    'district': 'North Ireland',
    'population': 287500
  }, {'id': 470, 'name': 'Nottingham', 'countrycode': 'GBR', 'district': 'England', 'population': 287000}, {
    'id': 471,
    'name': 'Kingston upon Hull',
    'countrycode': 'GBR',
    'district': 'England',
    'population': 262000
  }, {'id': 472, 'name': 'Plymouth', 'countrycode': 'GBR', 'district': 'England', 'population': 253000}, {
    'id': 473,
    'name': 'Stoke-on-Trent',
    'countrycode': 'GBR',
    'district': 'England',
    'population': 252000
  }, {'id': 474, 'name': 'Wolverhampton', 'countrycode': 'GBR', 'district': 'England', 'population': 242000}, {
    'id': 475,
    'name': 'Derby',
    'countrycode': 'GBR',
    'district': 'England',
    'population': 236000
  }, {'id': 476, 'name': 'Swansea', 'countrycode': 'GBR', 'district': 'Wales', 'population': 230000}, {
    'id': 477,
    'name': 'Southampton',
    'countrycode': 'GBR',
    'district': 'England',
    'population': 216000
  }, {'id': 478, 'name': 'Aberdeen', 'countrycode': 'GBR', 'district': 'Scotland', 'population': 213070}, {
    'id': 479,
    'name': 'Northampton',
    'countrycode': 'GBR',
    'district': 'England',
    'population': 196000
  }, {'id': 480, 'name': 'Dudley', 'countrycode': 'GBR', 'district': 'England', 'population': 192171}, {
    'id': 481,
    'name': 'Portsmouth',
    'countrycode': 'GBR',
    'district': 'England',
    'population': 190000
  }, {'id': 482, 'name': 'Newcastle upon Tyne', 'countrycode': 'GBR', 'district': 'England', 'population': 189150}, {
    'id': 483,
    'name': 'Sunderland',
    'countrycode': 'GBR',
    'district': 'England',
    'population': 183310
  }, {'id': 484, 'name': 'Luton', 'countrycode': 'GBR', 'district': 'England', 'population': 183000}, {
    'id': 485,
    'name': 'Swindon',
    'countrycode': 'GBR',
    'district': 'England',
    'population': 180000
  }, {'id': 486, 'name': 'Southend-on-Sea', 'countrycode': 'GBR', 'district': 'England', 'population': 176000}, {
    'id': 487,
    'name': 'Walsall',
    'countrycode': 'GBR',
    'district': 'England',
    'population': 174739
  }, {'id': 488, 'name': 'Bournemouth', 'countrycode': 'GBR', 'district': 'England', 'population': 162000}, {
    'id': 489,
    'name': 'Peterborough',
    'countrycode': 'GBR',
    'district': 'England',
    'population': 156000
  }, {'id': 490, 'name': 'Brighton', 'countrycode': 'GBR', 'district': 'England', 'population': 156124}, {
    'id': 491,
    'name': 'Blackpool',
    'countrycode': 'GBR',
    'district': 'England',
    'population': 151000
  }, {'id': 492, 'name': 'Dundee', 'countrycode': 'GBR', 'district': 'Scotland', 'population': 146690}, {
    'id': 493,
    'name': 'West Bromwich',
    'countrycode': 'GBR',
    'district': 'England',
    'population': 146386
  }, {'id': 494, 'name': 'Reading', 'countrycode': 'GBR', 'district': 'England', 'population': 148000}, {
    'id': 495,
    'name': 'Oldbury/Smethwick (Warley)',
    'countrycode': 'GBR',
    'district': 'England',
    'population': 145542
  }, {'id': 496, 'name': 'Middlesbrough', 'countrycode': 'GBR', 'district': 'England', 'population': 145000}, {
    'id': 497,
    'name': 'Huddersfield',
    'countrycode': 'GBR',
    'district': 'England',
    'population': 143726
  }, {'id': 498, 'name': 'Oxford', 'countrycode': 'GBR', 'district': 'England', 'population': 144000}, {
    'id': 499,
    'name': 'Poole',
    'countrycode': 'GBR',
    'district': 'England',
    'population': 141000
  }, {'id': 500, 'name': 'Bolton', 'countrycode': 'GBR', 'district': 'England', 'population': 139020}, {
    'id': 501,
    'name': 'Blackburn',
    'countrycode': 'GBR',
    'district': 'England',
    'population': 140000
  }, {'id': 502, 'name': 'Newport', 'countrycode': 'GBR', 'district': 'Wales', 'population': 139000}, {
    'id': 503,
    'name': 'Preston',
    'countrycode': 'GBR',
    'district': 'England',
    'population': 135000
  }, {'id': 504, 'name': 'Stockport', 'countrycode': 'GBR', 'district': 'England', 'population': 132813}, {
    'id': 505,
    'name': 'Norwich',
    'countrycode': 'GBR',
    'district': 'England',
    'population': 124000
  }, {'id': 506, 'name': 'Rotherham', 'countrycode': 'GBR', 'district': 'England', 'population': 121380}, {
    'id': 507,
    'name': 'Cambridge',
    'countrycode': 'GBR',
    'district': 'England',
    'population': 121000
  }, {'id': 508, 'name': 'Watford', 'countrycode': 'GBR', 'district': 'England', 'population': 113080}, {
    'id': 509,
    'name': 'Ipswich',
    'countrycode': 'GBR',
    'district': 'England',
    'population': 114000
  }, {'id': 510, 'name': 'Slough', 'countrycode': 'GBR', 'district': 'England', 'population': 112000}, {
    'id': 511,
    'name': 'Exeter',
    'countrycode': 'GBR',
    'district': 'England',
    'population': 111000
  }, {'id': 512, 'name': 'Cheltenham', 'countrycode': 'GBR', 'district': 'England', 'population': 106000}, {
    'id': 513,
    'name': 'Gloucester',
    'countrycode': 'GBR',
    'district': 'England',
    'population': 107000
  }, {'id': 514, 'name': 'Saint Helens', 'countrycode': 'GBR', 'district': 'England', 'population': 106293}, {
    'id': 515,
    'name': 'Sutton Coldfield',
    'countrycode': 'GBR',
    'district': 'England',
    'population': 106001
  }, {'id': 516, 'name': 'York', 'countrycode': 'GBR', 'district': 'England', 'population': 104425}, {
    'id': 517,
    'name': 'Oldham',
    'countrycode': 'GBR',
    'district': 'England',
    'population': 103931
  }, {'id': 518, 'name': 'Basildon', 'countrycode': 'GBR', 'district': 'England', 'population': 100924}, {
    'id': 519,
    'name': 'Worthing',
    'countrycode': 'GBR',
    'district': 'England',
    'population': 100000
  }, {'id': 520, 'name': 'Chelmsford', 'countrycode': 'GBR', 'district': 'England', 'population': 97451}, {
    'id': 521,
    'name': 'Colchester',
    'countrycode': 'GBR',
    'district': 'England',
    'population': 96063
  }, {'id': 522, 'name': 'Crawley', 'countrycode': 'GBR', 'district': 'England', 'population': 97000}, {
    'id': 523,
    'name': 'Gillingham',
    'countrycode': 'GBR',
    'district': 'England',
    'population': 92000
  }, {'id': 524, 'name': 'Solihull', 'countrycode': 'GBR', 'district': 'England', 'population': 94531}, {
    'id': 525,
    'name': 'Rochdale',
    'countrycode': 'GBR',
    'district': 'England',
    'population': 94313
  }, {'id': 526, 'name': 'Birkenhead', 'countrycode': 'GBR', 'district': 'England', 'population': 93087}, {
    'id': 527,
    'name': 'Worcester',
    'countrycode': 'GBR',
    'district': 'England',
    'population': 95000
  }, {'id': 528, 'name': 'Hartlepool', 'countrycode': 'GBR', 'district': 'England', 'population': 92000}, {
    'id': 529,
    'name': 'Halifax',
    'countrycode': 'GBR',
    'district': 'England',
    'population': 91069
  }, {'id': 530, 'name': 'Woking/Byfleet', 'countrycode': 'GBR', 'district': 'England', 'population': 92000}, {
    'id': 531,
    'name': 'Southport',
    'countrycode': 'GBR',
    'district': 'England',
    'population': 90959
  }, {'id': 532, 'name': 'Maidstone', 'countrycode': 'GBR', 'district': 'England', 'population': 90878}, {
    'id': 533,
    'name': 'Eastbourne',
    'countrycode': 'GBR',
    'district': 'England',
    'population': 90000
  }, {'id': 534, 'name': 'Grimsby', 'countrycode': 'GBR', 'district': 'England', 'population': 89000}, {
    'id': 535,
    'name': 'Saint Helier',
    'countrycode': 'GBR',
    'district': 'Jersey',
    'population': 27523
  }, {'id': 536, 'name': 'Douglas', 'countrycode': 'GBR', 'district': 'Â–', 'population': 23487}, {
    'id': 537,
    'name': 'Road Town',
    'countrycode': 'VGB',
    'district': 'Tortola',
    'population': 8000
  }, {'id': 538, 'name': 'Bandar Seri Begawan', 'countrycode': 'BRN', 'district': 'Brunei and Muara', 'population': 21484}, {
    'id': 539,
    'name': 'Sofija',
    'countrycode': 'BGR',
    'district': 'Grad Sofija',
    'population': 1122302
  }, {'id': 540, 'name': 'Plovdiv', 'countrycode': 'BGR', 'district': 'Plovdiv', 'population': 342584}, {
    'id': 541,
    'name': 'Varna',
    'countrycode': 'BGR',
    'district': 'Varna',
    'population': 299801
  }, {'id': 542, 'name': 'Burgas', 'countrycode': 'BGR', 'district': 'Burgas', 'population': 195255}, {
    'id': 543,
    'name': 'Ruse',
    'countrycode': 'BGR',
    'district': 'Ruse',
    'population': 166467
  }, {'id': 544, 'name': 'Stara Zagora', 'countrycode': 'BGR', 'district': 'Haskovo', 'population': 147939}, {
    'id': 545,
    'name': 'Pleven',
    'countrycode': 'BGR',
    'district': 'Lovec',
    'population': 121952
  }, {'id': 546, 'name': 'Sliven', 'countrycode': 'BGR', 'district': 'Burgas', 'population': 105530}, {
    'id': 547,
    'name': 'Dobric',
    'countrycode': 'BGR',
    'district': 'Varna',
    'population': 100399
  }, {'id': 548, 'name': 'ÂŠumen', 'countrycode': 'BGR', 'district': 'Varna', 'population': 94686}, {
    'id': 549,
    'name': 'Ouagadougou',
    'countrycode': 'BFA',
    'district': 'Kadiogo',
    'population': 824000
  }, {'id': 550, 'name': 'Bobo-Dioulasso', 'countrycode': 'BFA', 'district': 'Houet', 'population': 300000}, {
    'id': 551,
    'name': 'Koudougou',
    'countrycode': 'BFA',
    'district': 'BoulkiemdÃ©',
    'population': 105000
  }, {'id': 552, 'name': 'Bujumbura', 'countrycode': 'BDI', 'district': 'Bujumbura', 'population': 300000}, {
    'id': 553,
    'name': 'George Town',
    'countrycode': 'CYM',
    'district': 'Grand Cayman',
    'population': 19600
  }, {'id': 554, 'name': 'Santiago de Chile', 'countrycode': 'CHL', 'district': 'Santiago', 'population': 4703954}, {
    'id': 555,
    'name': 'Puente Alto',
    'countrycode': 'CHL',
    'district': 'Santiago',
    'population': 386236
  }, {'id': 556, 'name': 'ViÃ±a del Mar', 'countrycode': 'CHL', 'district': 'ValparaÃ­so', 'population': 312493}, {
    'id': 557,
    'name': 'ValparaÃ­so',
    'countrycode': 'CHL',
    'district': 'ValparaÃ­so',
    'population': 293800
  }, {'id': 558, 'name': 'Talcahuano', 'countrycode': 'CHL', 'district': 'BÃ­obÃ­o', 'population': 277752}, {
    'id': 559,
    'name': 'Antofagasta',
    'countrycode': 'CHL',
    'district': 'Antofagasta',
    'population': 251429
  }, {'id': 560, 'name': 'San Bernardo', 'countrycode': 'CHL', 'district': 'Santiago', 'population': 241910}, {
    'id': 561,
    'name': 'Temuco',
    'countrycode': 'CHL',
    'district': 'La AraucanÃ­a',
    'population': 233041
  }, {'id': 562, 'name': 'ConcepciÃ³n', 'countrycode': 'CHL', 'district': 'BÃ­obÃ­o', 'population': 217664}, {
    'id': 563,
    'name': 'Rancagua',
    'countrycode': 'CHL',
    'district': 'OÂ´Higgins',
    'population': 212977
  }, {'id': 564, 'name': 'Arica', 'countrycode': 'CHL', 'district': 'TarapacÃ¡', 'population': 189036}, {
    'id': 565,
    'name': 'Talca',
    'countrycode': 'CHL',
    'district': 'Maule',
    'population': 187557
  }, {'id': 566, 'name': 'ChillÃ¡n', 'countrycode': 'CHL', 'district': 'BÃ­obÃ­o', 'population': 178182}, {
    'id': 567,
    'name': 'Iquique',
    'countrycode': 'CHL',
    'district': 'TarapacÃ¡',
    'population': 177892
  }, {'id': 568, 'name': 'Los Angeles', 'countrycode': 'CHL', 'district': 'BÃ­obÃ­o', 'population': 158215}, {
    'id': 569,
    'name': 'Puerto Montt',
    'countrycode': 'CHL',
    'district': 'Los Lagos',
    'population': 152194
  }, {'id': 570, 'name': 'Coquimbo', 'countrycode': 'CHL', 'district': 'Coquimbo', 'population': 143353}, {
    'id': 571,
    'name': 'Osorno',
    'countrycode': 'CHL',
    'district': 'Los Lagos',
    'population': 141468
  }, {'id': 572, 'name': 'La Serena', 'countrycode': 'CHL', 'district': 'Coquimbo', 'population': 137409}, {
    'id': 573,
    'name': 'Calama',
    'countrycode': 'CHL',
    'district': 'Antofagasta',
    'population': 137265
  }, {'id': 574, 'name': 'Valdivia', 'countrycode': 'CHL', 'district': 'Los Lagos', 'population': 133106}, {
    'id': 575,
    'name': 'Punta Arenas',
    'countrycode': 'CHL',
    'district': 'Magallanes',
    'population': 125631
  }, {'id': 576, 'name': 'CopiapÃ³', 'countrycode': 'CHL', 'district': 'Atacama', 'population': 120128}, {
    'id': 577,
    'name': 'QuilpuÃ©',
    'countrycode': 'CHL',
    'district': 'ValparaÃ­so',
    'population': 118857
  }, {'id': 578, 'name': 'CuricÃ³', 'countrycode': 'CHL', 'district': 'Maule', 'population': 115766}, {
    'id': 579,
    'name': 'Ovalle',
    'countrycode': 'CHL',
    'district': 'Coquimbo',
    'population': 94854
  }, {'id': 580, 'name': 'Coronel', 'countrycode': 'CHL', 'district': 'BÃ­obÃ­o', 'population': 93061}, {
    'id': 581,
    'name': 'San Pedro de la Paz',
    'countrycode': 'CHL',
    'district': 'BÃ­obÃ­o',
    'population': 91684
  }, {'id': 582, 'name': 'Melipilla', 'countrycode': 'CHL', 'district': 'Santiago', 'population': 91056}, {
    'id': 583,
    'name': 'Avarua',
    'countrycode': 'COK',
    'district': 'Rarotonga',
    'population': 11900
  }, {'id': 584, 'name': 'San JosÃ©', 'countrycode': 'CRI', 'district': 'San JosÃ©', 'population': 339131}, {
    'id': 585,
    'name': 'Djibouti',
    'countrycode': 'DJI',
    'district': 'Djibouti',
    'population': 383000
  }, {'id': 586, 'name': 'Roseau', 'countrycode': 'DMA', 'district': 'St George', 'population': 16243}, {
    'id': 587,
    'name': 'Santo Domingo de GuzmÃ¡n',
    'countrycode': 'DOM',
    'district': 'Distrito Nacional',
    'population': 1609966
  }, {'id': 588, 'name': 'Santiago de los Caballeros', 'countrycode': 'DOM', 'district': 'Santiago', 'population': 365463}, {
    'id': 589,
    'name': 'La Romana',
    'countrycode': 'DOM',
    'district': 'La Romana',
    'population': 140204
  }, {
    'id': 590,
    'name': 'San Pedro de MacorÃ­s',
    'countrycode': 'DOM',
    'district': 'San Pedro de MacorÃ­',
    'population': 124735
  }, {'id': 591, 'name': 'San Francisco de MacorÃ­s', 'countrycode': 'DOM', 'district': 'Duarte', 'population': 108485}, {
    'id': 592,
    'name': 'San Felipe de Puerto Plata',
    'countrycode': 'DOM',
    'district': 'Puerto Plata',
    'population': 89423
  }, {'id': 593, 'name': 'Guayaquil', 'countrycode': 'ECU', 'district': 'Guayas', 'population': 2070040}, {
    'id': 594,
    'name': 'Quito',
    'countrycode': 'ECU',
    'district': 'Pichincha',
    'population': 1573458
  }, {'id': 595, 'name': 'Cuenca', 'countrycode': 'ECU', 'district': 'Azuay', 'population': 270353}, {
    'id': 596,
    'name': 'Machala',
    'countrycode': 'ECU',
    'district': 'El Oro',
    'population': 210368
  }, {
    'id': 597,
    'name': 'Santo Domingo de los Colorados',
    'countrycode': 'ECU',
    'district': 'Pichincha',
    'population': 202111
  }, {'id': 598, 'name': 'Portoviejo', 'countrycode': 'ECU', 'district': 'ManabÃ­', 'population': 176413}, {
    'id': 599,
    'name': 'Ambato',
    'countrycode': 'ECU',
    'district': 'Tungurahua',
    'population': 169612
  }, {'id': 600, 'name': 'Manta', 'countrycode': 'ECU', 'district': 'ManabÃ­', 'population': 164739}, {
    'id': 601,
    'name': 'Duran [Eloy Alfaro]',
    'countrycode': 'ECU',
    'district': 'Guayas',
    'population': 152514
  }, {'id': 602, 'name': 'Ibarra', 'countrycode': 'ECU', 'district': 'Imbabura', 'population': 130643}, {
    'id': 603,
    'name': 'Quevedo',
    'countrycode': 'ECU',
    'district': 'Los RÃ­os',
    'population': 129631
  }, {'id': 604, 'name': 'Milagro', 'countrycode': 'ECU', 'district': 'Guayas', 'population': 124177}, {
    'id': 605,
    'name': 'Loja',
    'countrycode': 'ECU',
    'district': 'Loja',
    'population': 123875
  }, {'id': 606, 'name': 'RÃ­obamba', 'countrycode': 'ECU', 'district': 'Chimborazo', 'population': 123163}, {
    'id': 607,
    'name': 'Esmeraldas',
    'countrycode': 'ECU',
    'district': 'Esmeraldas',
    'population': 123045
  }, {'id': 608, 'name': 'Cairo', 'countrycode': 'EGY', 'district': 'Kairo', 'population': 6789479}, {
    'id': 609,
    'name': 'Alexandria',
    'countrycode': 'EGY',
    'district': 'Aleksandria',
    'population': 3328196
  }, {'id': 610, 'name': 'Giza', 'countrycode': 'EGY', 'district': 'Giza', 'population': 2221868}, {
    'id': 611,
    'name': 'Shubra al-Khayma',
    'countrycode': 'EGY',
    'district': 'al-Qalyubiya',
    'population': 870716
  }, {'id': 612, 'name': 'Port Said', 'countrycode': 'EGY', 'district': 'Port Said', 'population': 469533}, {
    'id': 613,
    'name': 'Suez',
    'countrycode': 'EGY',
    'district': 'Suez',
    'population': 417610
  }, {'id': 614, 'name': 'al-Mahallat al-Kubra', 'countrycode': 'EGY', 'district': 'al-Gharbiya', 'population': 395402}, {
    'id': 615,
    'name': 'Tanta',
    'countrycode': 'EGY',
    'district': 'al-Gharbiya',
    'population': 371010
  }, {'id': 616, 'name': 'al-Mansura', 'countrycode': 'EGY', 'district': 'al-Daqahliya', 'population': 369621}, {
    'id': 617,
    'name': 'Luxor',
    'countrycode': 'EGY',
    'district': 'Luxor',
    'population': 360503
  }, {'id': 618, 'name': 'Asyut', 'countrycode': 'EGY', 'district': 'Asyut', 'population': 343498}, {
    'id': 619,
    'name': 'Bahtim',
    'countrycode': 'EGY',
    'district': 'al-Qalyubiya',
    'population': 275807
  }, {'id': 620, 'name': 'Zagazig', 'countrycode': 'EGY', 'district': 'al-Sharqiya', 'population': 267351}, {
    'id': 621,
    'name': 'al-Faiyum',
    'countrycode': 'EGY',
    'district': 'al-Faiyum',
    'population': 260964
  }, {'id': 622, 'name': 'Ismailia', 'countrycode': 'EGY', 'district': 'Ismailia', 'population': 254477}, {
    'id': 623,
    'name': 'Kafr al-Dawwar',
    'countrycode': 'EGY',
    'district': 'al-Buhayra',
    'population': 231978
  }, {'id': 624, 'name': 'Assuan', 'countrycode': 'EGY', 'district': 'Assuan', 'population': 219017}, {
    'id': 625,
    'name': 'Damanhur',
    'countrycode': 'EGY',
    'district': 'al-Buhayra',
    'population': 212203
  }, {'id': 626, 'name': 'al-Minya', 'countrycode': 'EGY', 'district': 'al-Minya', 'population': 201360}, {
    'id': 627,
    'name': 'Bani Suwayf',
    'countrycode': 'EGY',
    'district': 'Bani Suwayf',
    'population': 172032
  }, {'id': 628, 'name': 'Qina', 'countrycode': 'EGY', 'district': 'Qina', 'population': 171275}, {
    'id': 629,
    'name': 'Sawhaj',
    'countrycode': 'EGY',
    'district': 'Sawhaj',
    'population': 170125
  }, {'id': 630, 'name': 'Shibin al-Kawm', 'countrycode': 'EGY', 'district': 'al-Minufiya', 'population': 159909}, {
    'id': 631,
    'name': 'Bulaq al-Dakrur',
    'countrycode': 'EGY',
    'district': 'Giza',
    'population': 148787
  }, {'id': 632, 'name': 'Banha', 'countrycode': 'EGY', 'district': 'al-Qalyubiya', 'population': 145792}, {
    'id': 633,
    'name': 'Warraq al-Arab',
    'countrycode': 'EGY',
    'district': 'Giza',
    'population': 127108
  }, {'id': 634, 'name': 'Kafr al-Shaykh', 'countrycode': 'EGY', 'district': 'Kafr al-Shaykh', 'population': 124819}, {
    'id': 635,
    'name': 'Mallawi',
    'countrycode': 'EGY',
    'district': 'al-Minya',
    'population': 119283
  }, {'id': 636, 'name': 'Bilbays', 'countrycode': 'EGY', 'district': 'al-Sharqiya', 'population': 113608}, {
    'id': 637,
    'name': 'Mit Ghamr',
    'countrycode': 'EGY',
    'district': 'al-Daqahliya',
    'population': 101801
  }, {'id': 638, 'name': 'al-Arish', 'countrycode': 'EGY', 'district': 'Shamal Sina', 'population': 100447}, {
    'id': 639,
    'name': 'Talkha',
    'countrycode': 'EGY',
    'district': 'al-Daqahliya',
    'population': 97700
  }, {'id': 640, 'name': 'Qalyub', 'countrycode': 'EGY', 'district': 'al-Qalyubiya', 'population': 97200}, {
    'id': 641,
    'name': 'Jirja',
    'countrycode': 'EGY',
    'district': 'Sawhaj',
    'population': 95400
  }, {'id': 642, 'name': 'Idfu', 'countrycode': 'EGY', 'district': 'Qina', 'population': 94200}, {
    'id': 643,
    'name': 'al-Hawamidiya',
    'countrycode': 'EGY',
    'district': 'Giza',
    'population': 91700
  }, {'id': 644, 'name': 'Disuq', 'countrycode': 'EGY', 'district': 'Kafr al-Shaykh', 'population': 91300}, {
    'id': 645,
    'name': 'San Salvador',
    'countrycode': 'SLV',
    'district': 'San Salvador',
    'population': 415346
  }, {'id': 646, 'name': 'Santa Ana', 'countrycode': 'SLV', 'district': 'Santa Ana', 'population': 139389}, {
    'id': 647,
    'name': 'Mejicanos',
    'countrycode': 'SLV',
    'district': 'San Salvador',
    'population': 138800
  }, {'id': 648, 'name': 'Soyapango', 'countrycode': 'SLV', 'district': 'San Salvador', 'population': 129800}, {
    'id': 649,
    'name': 'San Miguel',
    'countrycode': 'SLV',
    'district': 'San Miguel',
    'population': 127696
  }, {'id': 650, 'name': 'Nueva San Salvador', 'countrycode': 'SLV', 'district': 'La Libertad', 'population': 98400}, {
    'id': 651,
    'name': 'Apopa',
    'countrycode': 'SLV',
    'district': 'San Salvador',
    'population': 88800
  }, {'id': 652, 'name': 'Asmara', 'countrycode': 'ERI', 'district': 'Maekel', 'population': 431000}, {
    'id': 653,
    'name': 'Madrid',
    'countrycode': 'ESP',
    'district': 'Madrid',
    'population': 2879052
  }, {'id': 654, 'name': 'Barcelona', 'countrycode': 'ESP', 'district': 'Katalonia', 'population': 1503451}, {
    'id': 655,
    'name': 'Valencia',
    'countrycode': 'ESP',
    'district': 'Valencia',
    'population': 739412
  }, {'id': 656, 'name': 'Sevilla', 'countrycode': 'ESP', 'district': 'Andalusia', 'population': 701927}, {
    'id': 657,
    'name': 'Zaragoza',
    'countrycode': 'ESP',
    'district': 'Aragonia',
    'population': 603367
  }, {'id': 658, 'name': 'MÃ¡laga', 'countrycode': 'ESP', 'district': 'Andalusia', 'population': 530553}, {
    'id': 659,
    'name': 'Bilbao',
    'countrycode': 'ESP',
    'district': 'Baskimaa',
    'population': 357589
  }, {
    'id': 660,
    'name': 'Las Palmas de Gran Canaria',
    'countrycode': 'ESP',
    'district': 'Canary Islands',
    'population': 354757
  }, {'id': 661, 'name': 'Murcia', 'countrycode': 'ESP', 'district': 'Murcia', 'population': 353504}, {
    'id': 662,
    'name': 'Palma de Mallorca',
    'countrycode': 'ESP',
    'district': 'Balears',
    'population': 326993
  }, {'id': 663, 'name': 'Valladolid', 'countrycode': 'ESP', 'district': 'Castilla and LeÃ³n', 'population': 319998}, {
    'id': 664,
    'name': 'CÃ³rdoba',
    'countrycode': 'ESP',
    'district': 'Andalusia',
    'population': 311708
  }, {'id': 665, 'name': 'Vigo', 'countrycode': 'ESP', 'district': 'Galicia', 'population': 283670}, {
    'id': 666,
    'name': 'Alicante [Alacant]',
    'countrycode': 'ESP',
    'district': 'Valencia',
    'population': 272432
  }, {'id': 667, 'name': 'GijÃ³n', 'countrycode': 'ESP', 'district': 'Asturia', 'population': 267980}, {
    'id': 668,
    'name': 'LÂ´Hospitalet de Llobregat',
    'countrycode': 'ESP',
    'district': 'Katalonia',
    'population': 247986
  }, {'id': 669, 'name': 'Granada', 'countrycode': 'ESP', 'district': 'Andalusia', 'population': 244767}, {
    'id': 670,
    'name': 'A CoruÃ±a (La CoruÃ±a)',
    'countrycode': 'ESP',
    'district': 'Galicia',
    'population': 243402
  }, {'id': 671, 'name': 'Vitoria-Gasteiz', 'countrycode': 'ESP', 'district': 'Baskimaa', 'population': 217154}, {
    'id': 672,
    'name': 'Santa Cruz de Tenerife',
    'countrycode': 'ESP',
    'district': 'Canary Islands',
    'population': 213050
  }, {'id': 673, 'name': 'Badalona', 'countrycode': 'ESP', 'district': 'Katalonia', 'population': 209635}, {
    'id': 674,
    'name': 'Oviedo',
    'countrycode': 'ESP',
    'district': 'Asturia',
    'population': 200453
  }, {'id': 675, 'name': 'MÃ³stoles', 'countrycode': 'ESP', 'district': 'Madrid', 'population': 195351}, {
    'id': 676,
    'name': 'Elche [Elx]',
    'countrycode': 'ESP',
    'district': 'Valencia',
    'population': 193174
  }, {'id': 677, 'name': 'Sabadell', 'countrycode': 'ESP', 'district': 'Katalonia', 'population': 184859}, {
    'id': 678,
    'name': 'Santander',
    'countrycode': 'ESP',
    'district': 'Cantabria',
    'population': 184165
  }, {'id': 679, 'name': 'Jerez de la Frontera', 'countrycode': 'ESP', 'district': 'Andalusia', 'population': 182660}, {
    'id': 680,
    'name': 'Pamplona [IruÃ±a]',
    'countrycode': 'ESP',
    'district': 'Navarra',
    'population': 180483
  }, {'id': 681, 'name': 'Donostia-San SebastiÃ¡n', 'countrycode': 'ESP', 'district': 'Baskimaa', 'population': 179208}, {
    'id': 682,
    'name': 'Cartagena',
    'countrycode': 'ESP',
    'district': 'Murcia',
    'population': 177709
  }, {'id': 683, 'name': 'LeganÃ©s', 'countrycode': 'ESP', 'district': 'Madrid', 'population': 173163}, {
    'id': 684,
    'name': 'Fuenlabrada',
    'countrycode': 'ESP',
    'district': 'Madrid',
    'population': 171173
  }, {'id': 685, 'name': 'AlmerÃ­a', 'countrycode': 'ESP', 'district': 'Andalusia', 'population': 169027}, {
    'id': 686,
    'name': 'Terrassa',
    'countrycode': 'ESP',
    'district': 'Katalonia',
    'population': 168695
  }, {'id': 687, 'name': 'AlcalÃ¡ de Henares', 'countrycode': 'ESP', 'district': 'Madrid', 'population': 164463}, {
    'id': 688,
    'name': 'Burgos',
    'countrycode': 'ESP',
    'district': 'Castilla and LeÃ³n',
    'population': 162802
  }, {'id': 689, 'name': 'Salamanca', 'countrycode': 'ESP', 'district': 'Castilla and LeÃ³n', 'population': 158720}, {
    'id': 690,
    'name': 'Albacete',
    'countrycode': 'ESP',
    'district': 'Kastilia-La Mancha',
    'population': 147527
  }, {'id': 691, 'name': 'Getafe', 'countrycode': 'ESP', 'district': 'Madrid', 'population': 145371}, {
    'id': 692,
    'name': 'CÃ¡diz',
    'countrycode': 'ESP',
    'district': 'Andalusia',
    'population': 142449
  }, {'id': 693, 'name': 'AlcorcÃ³n', 'countrycode': 'ESP', 'district': 'Madrid', 'population': 142048}, {
    'id': 694,
    'name': 'Huelva',
    'countrycode': 'ESP',
    'district': 'Andalusia',
    'population': 140583
  }, {'id': 695, 'name': 'LeÃ³n', 'countrycode': 'ESP', 'district': 'Castilla and LeÃ³n', 'population': 139809}, {
    'id': 696,
    'name': 'CastellÃ³n de la Plana [Castell',
    'countrycode': 'ESP',
    'district': 'Valencia',
    'population': 139712
  }, {'id': 697, 'name': 'Badajoz', 'countrycode': 'ESP', 'district': 'Extremadura', 'population': 136613}, {
    'id': 698,
    'name': '[San CristÃ³bal de] la Laguna',
    'countrycode': 'ESP',
    'district': 'Canary Islands',
    'population': 127945
  }, {'id': 699, 'name': 'LogroÃ±o', 'countrycode': 'ESP', 'district': 'La Rioja', 'population': 127093}, {
    'id': 700,
    'name': 'Santa Coloma de Gramenet',
    'countrycode': 'ESP',
    'district': 'Katalonia',
    'population': 120802
  }, {'id': 701, 'name': 'Tarragona', 'countrycode': 'ESP', 'district': 'Katalonia', 'population': 113016}, {
    'id': 702,
    'name': 'Lleida (LÃ©rida)',
    'countrycode': 'ESP',
    'district': 'Katalonia',
    'population': 112207
  }, {'id': 703, 'name': 'JaÃ©n', 'countrycode': 'ESP', 'district': 'Andalusia', 'population': 109247}, {
    'id': 704,
    'name': 'Ourense (Orense)',
    'countrycode': 'ESP',
    'district': 'Galicia',
    'population': 109120
  }, {'id': 705, 'name': 'MatarÃ³', 'countrycode': 'ESP', 'district': 'Katalonia', 'population': 104095}, {
    'id': 706,
    'name': 'Algeciras',
    'countrycode': 'ESP',
    'district': 'Andalusia',
    'population': 103106
  }, {'id': 707, 'name': 'Marbella', 'countrycode': 'ESP', 'district': 'Andalusia', 'population': 101144}, {
    'id': 708,
    'name': 'Barakaldo',
    'countrycode': 'ESP',
    'district': 'Baskimaa',
    'population': 98212
  }, {'id': 709, 'name': 'Dos Hermanas', 'countrycode': 'ESP', 'district': 'Andalusia', 'population': 94591}, {
    'id': 710,
    'name': 'Santiago de Compostela',
    'countrycode': 'ESP',
    'district': 'Galicia',
    'population': 93745
  }, {'id': 711, 'name': 'TorrejÃ³n de Ardoz', 'countrycode': 'ESP', 'district': 'Madrid', 'population': 92262}, {
    'id': 712,
    'name': 'Cape Town',
    'countrycode': 'ZAF',
    'district': 'Western Cape',
    'population': 2352121
  }, {'id': 713, 'name': 'Soweto', 'countrycode': 'ZAF', 'district': 'Gauteng', 'population': 904165}, {
    'id': 714,
    'name': 'Johannesburg',
    'countrycode': 'ZAF',
    'district': 'Gauteng',
    'population': 756653
  }, {'id': 715, 'name': 'Port Elizabeth', 'countrycode': 'ZAF', 'district': 'Eastern Cape', 'population': 752319}, {
    'id': 716,
    'name': 'Pretoria',
    'countrycode': 'ZAF',
    'district': 'Gauteng',
    'population': 658630
  }, {'id': 717, 'name': 'Inanda', 'countrycode': 'ZAF', 'district': 'KwaZulu-Natal', 'population': 634065}, {
    'id': 718,
    'name': 'Durban',
    'countrycode': 'ZAF',
    'district': 'KwaZulu-Natal',
    'population': 566120
  }, {'id': 719, 'name': 'Vanderbijlpark', 'countrycode': 'ZAF', 'district': 'Gauteng', 'population': 468931}, {
    'id': 720,
    'name': 'Kempton Park',
    'countrycode': 'ZAF',
    'district': 'Gauteng',
    'population': 442633
  }, {'id': 721, 'name': 'Alberton', 'countrycode': 'ZAF', 'district': 'Gauteng', 'population': 410102}, {
    'id': 722,
    'name': 'Pinetown',
    'countrycode': 'ZAF',
    'district': 'KwaZulu-Natal',
    'population': 378810
  }, {'id': 723, 'name': 'Pietermaritzburg', 'countrycode': 'ZAF', 'district': 'KwaZulu-Natal', 'population': 370190}, {
    'id': 724,
    'name': 'Benoni',
    'countrycode': 'ZAF',
    'district': 'Gauteng',
    'population': 365467
  }, {'id': 725, 'name': 'Randburg', 'countrycode': 'ZAF', 'district': 'Gauteng', 'population': 341288}, {
    'id': 726,
    'name': 'Umlazi',
    'countrycode': 'ZAF',
    'district': 'KwaZulu-Natal',
    'population': 339233
  }, {'id': 727, 'name': 'Bloemfontein', 'countrycode': 'ZAF', 'district': 'Free State', 'population': 334341}, {
    'id': 728,
    'name': 'Vereeniging',
    'countrycode': 'ZAF',
    'district': 'Gauteng',
    'population': 328535
  }, {'id': 729, 'name': 'Wonderboom', 'countrycode': 'ZAF', 'district': 'Gauteng', 'population': 283289}, {
    'id': 730,
    'name': 'Roodepoort',
    'countrycode': 'ZAF',
    'district': 'Gauteng',
    'population': 279340
  }, {'id': 731, 'name': 'Boksburg', 'countrycode': 'ZAF', 'district': 'Gauteng', 'population': 262648}, {
    'id': 732,
    'name': 'Klerksdorp',
    'countrycode': 'ZAF',
    'district': 'North West',
    'population': 261911
  }, {'id': 733, 'name': 'Soshanguve', 'countrycode': 'ZAF', 'district': 'Gauteng', 'population': 242727}, {
    'id': 734,
    'name': 'Newcastle',
    'countrycode': 'ZAF',
    'district': 'KwaZulu-Natal',
    'population': 222993
  }, {'id': 735, 'name': 'East London', 'countrycode': 'ZAF', 'district': 'Eastern Cape', 'population': 221047}, {
    'id': 736,
    'name': 'Welkom',
    'countrycode': 'ZAF',
    'district': 'Free State',
    'population': 203296
  }, {'id': 737, 'name': 'Kimberley', 'countrycode': 'ZAF', 'district': 'Northern Cape', 'population': 197254}, {
    'id': 738,
    'name': 'Uitenhage',
    'countrycode': 'ZAF',
    'district': 'Eastern Cape',
    'population': 192120
  }, {'id': 739, 'name': 'Chatsworth', 'countrycode': 'ZAF', 'district': 'KwaZulu-Natal', 'population': 189885}, {
    'id': 740,
    'name': 'Mdantsane',
    'countrycode': 'ZAF',
    'district': 'Eastern Cape',
    'population': 182639
  }, {'id': 741, 'name': 'Krugersdorp', 'countrycode': 'ZAF', 'district': 'Gauteng', 'population': 181503}, {
    'id': 742,
    'name': 'Botshabelo',
    'countrycode': 'ZAF',
    'district': 'Free State',
    'population': 177971
  }, {'id': 743, 'name': 'Brakpan', 'countrycode': 'ZAF', 'district': 'Gauteng', 'population': 171363}, {
    'id': 744,
    'name': 'Witbank',
    'countrycode': 'ZAF',
    'district': 'Mpumalanga',
    'population': 167183
  }, {'id': 745, 'name': 'Oberholzer', 'countrycode': 'ZAF', 'district': 'Gauteng', 'population': 164367}, {
    'id': 746,
    'name': 'Germiston',
    'countrycode': 'ZAF',
    'district': 'Gauteng',
    'population': 164252
  }, {'id': 747, 'name': 'Springs', 'countrycode': 'ZAF', 'district': 'Gauteng', 'population': 162072}, {
    'id': 748,
    'name': 'Westonaria',
    'countrycode': 'ZAF',
    'district': 'Gauteng',
    'population': 159632
  }, {'id': 749, 'name': 'Randfontein', 'countrycode': 'ZAF', 'district': 'Gauteng', 'population': 120838}, {
    'id': 750,
    'name': 'Paarl',
    'countrycode': 'ZAF',
    'district': 'Western Cape',
    'population': 105768
  }, {'id': 751, 'name': 'Potchefstroom', 'countrycode': 'ZAF', 'district': 'North West', 'population': 101817}, {
    'id': 752,
    'name': 'Rustenburg',
    'countrycode': 'ZAF',
    'district': 'North West',
    'population': 97008
  }, {'id': 753, 'name': 'Nigel', 'countrycode': 'ZAF', 'district': 'Gauteng', 'population': 96734}, {
    'id': 754,
    'name': 'George',
    'countrycode': 'ZAF',
    'district': 'Western Cape',
    'population': 93818
  }, {'id': 755, 'name': 'Ladysmith', 'countrycode': 'ZAF', 'district': 'KwaZulu-Natal', 'population': 89292}, {
    'id': 756,
    'name': 'Addis Abeba',
    'countrycode': 'ETH',
    'district': 'Addis Abeba',
    'population': 2495000
  }, {'id': 757, 'name': 'Dire Dawa', 'countrycode': 'ETH', 'district': 'Dire Dawa', 'population': 164851}, {
    'id': 758,
    'name': 'Nazret',
    'countrycode': 'ETH',
    'district': 'Oromia',
    'population': 127842
  }, {'id': 759, 'name': 'Gonder', 'countrycode': 'ETH', 'district': 'Amhara', 'population': 112249}, {
    'id': 760,
    'name': 'Dese',
    'countrycode': 'ETH',
    'district': 'Amhara',
    'population': 97314
  }, {'id': 761, 'name': 'Mekele', 'countrycode': 'ETH', 'district': 'Tigray', 'population': 96938}, {
    'id': 762,
    'name': 'Bahir Dar',
    'countrycode': 'ETH',
    'district': 'Amhara',
    'population': 96140
  }, {'id': 763, 'name': 'Stanley', 'countrycode': 'FLK', 'district': 'East Falkland', 'population': 1636}, {
    'id': 764,
    'name': 'Suva',
    'countrycode': 'FJI',
    'district': 'Central',
    'population': 77366
  }, {'id': 765, 'name': 'Quezon', 'countrycode': 'PHL', 'district': 'National Capital Reg', 'population': 2173831}, {
    'id': 766,
    'name': 'Manila',
    'countrycode': 'PHL',
    'district': 'National Capital Reg',
    'population': 1581082
  }, {'id': 767, 'name': 'Kalookan', 'countrycode': 'PHL', 'district': 'National Capital Reg', 'population': 1177604}, {
    'id': 768,
    'name': 'Davao',
    'countrycode': 'PHL',
    'district': 'Southern Mindanao',
    'population': 1147116
  }, {'id': 769, 'name': 'Cebu', 'countrycode': 'PHL', 'district': 'Central Visayas', 'population': 718821}, {
    'id': 770,
    'name': 'Zamboanga',
    'countrycode': 'PHL',
    'district': 'Western Mindanao',
    'population': 601794
  }, {'id': 771, 'name': 'Pasig', 'countrycode': 'PHL', 'district': 'National Capital Reg', 'population': 505058}, {
    'id': 772,
    'name': 'Valenzuela',
    'countrycode': 'PHL',
    'district': 'National Capital Reg',
    'population': 485433
  }, {'id': 773, 'name': 'Las PiÃ±as', 'countrycode': 'PHL', 'district': 'National Capital Reg', 'population': 472780}, {
    'id': 774,
    'name': 'Antipolo',
    'countrycode': 'PHL',
    'district': 'Southern Tagalog',
    'population': 470866
  }, {'id': 775, 'name': 'Taguig', 'countrycode': 'PHL', 'district': 'National Capital Reg', 'population': 467375}, {
    'id': 776,
    'name': 'Cagayan de Oro',
    'countrycode': 'PHL',
    'district': 'Northern Mindanao',
    'population': 461877
  }, {'id': 777, 'name': 'ParaÃ±aque', 'countrycode': 'PHL', 'district': 'National Capital Reg', 'population': 449811}, {
    'id': 778,
    'name': 'Makati',
    'countrycode': 'PHL',
    'district': 'National Capital Reg',
    'population': 444867
  }, {'id': 779, 'name': 'Bacolod', 'countrycode': 'PHL', 'district': 'Western Visayas', 'population': 429076}, {
    'id': 780,
    'name': 'General Santos',
    'countrycode': 'PHL',
    'district': 'Southern Mindanao',
    'population': 411822
  }, {'id': 781, 'name': 'Marikina', 'countrycode': 'PHL', 'district': 'National Capital Reg', 'population': 391170}, {
    'id': 782,
    'name': 'DasmariÃ±as',
    'countrycode': 'PHL',
    'district': 'Southern Tagalog',
    'population': 379520
  }, {'id': 783, 'name': 'Muntinlupa', 'countrycode': 'PHL', 'district': 'National Capital Reg', 'population': 379310}, {
    'id': 784,
    'name': 'Iloilo',
    'countrycode': 'PHL',
    'district': 'Western Visayas',
    'population': 365820
  }, {'id': 785, 'name': 'Pasay', 'countrycode': 'PHL', 'district': 'National Capital Reg', 'population': 354908}, {
    'id': 786,
    'name': 'Malabon',
    'countrycode': 'PHL',
    'district': 'National Capital Reg',
    'population': 338855
  }, {'id': 787, 'name': 'San JosÃ© del Monte', 'countrycode': 'PHL', 'district': 'Central Luzon', 'population': 315807}, {
    'id': 788,
    'name': 'Bacoor',
    'countrycode': 'PHL',
    'district': 'Southern Tagalog',
    'population': 305699
  }, {'id': 789, 'name': 'Iligan', 'countrycode': 'PHL', 'district': 'Central Mindanao', 'population': 285061}, {
    'id': 790,
    'name': 'Calamba',
    'countrycode': 'PHL',
    'district': 'Southern Tagalog',
    'population': 281146
  }, {'id': 791, 'name': 'Mandaluyong', 'countrycode': 'PHL', 'district': 'National Capital Reg', 'population': 278474}, {
    'id': 792,
    'name': 'Butuan',
    'countrycode': 'PHL',
    'district': 'Caraga',
    'population': 267279
  }, {'id': 793, 'name': 'Angeles', 'countrycode': 'PHL', 'district': 'Central Luzon', 'population': 263971}, {
    'id': 794,
    'name': 'Tarlac',
    'countrycode': 'PHL',
    'district': 'Central Luzon',
    'population': 262481
  }, {'id': 795, 'name': 'Mandaue', 'countrycode': 'PHL', 'district': 'Central Visayas', 'population': 259728}, {
    'id': 796,
    'name': 'Baguio',
    'countrycode': 'PHL',
    'district': 'CAR',
    'population': 252386
  }, {'id': 797, 'name': 'Batangas', 'countrycode': 'PHL', 'district': 'Southern Tagalog', 'population': 247588}, {
    'id': 798,
    'name': 'Cainta',
    'countrycode': 'PHL',
    'district': 'Southern Tagalog',
    'population': 242511
  }, {'id': 799, 'name': 'San Pedro', 'countrycode': 'PHL', 'district': 'Southern Tagalog', 'population': 231403}, {
    'id': 800,
    'name': 'Navotas',
    'countrycode': 'PHL',
    'district': 'National Capital Reg',
    'population': 230403
  }, {'id': 801, 'name': 'Cabanatuan', 'countrycode': 'PHL', 'district': 'Central Luzon', 'population': 222859}, {
    'id': 802,
    'name': 'San Fernando',
    'countrycode': 'PHL',
    'district': 'Central Luzon',
    'population': 221857
  }, {'id': 803, 'name': 'Lipa', 'countrycode': 'PHL', 'district': 'Southern Tagalog', 'population': 218447}, {
    'id': 804,
    'name': 'Lapu-Lapu',
    'countrycode': 'PHL',
    'district': 'Central Visayas',
    'population': 217019
  }, {'id': 805, 'name': 'San Pablo', 'countrycode': 'PHL', 'district': 'Southern Tagalog', 'population': 207927}, {
    'id': 806,
    'name': 'BiÃ±an',
    'countrycode': 'PHL',
    'district': 'Southern Tagalog',
    'population': 201186
  }, {'id': 807, 'name': 'Taytay', 'countrycode': 'PHL', 'district': 'Southern Tagalog', 'population': 198183}, {
    'id': 808,
    'name': 'Lucena',
    'countrycode': 'PHL',
    'district': 'Southern Tagalog',
    'population': 196075
  }, {'id': 809, 'name': 'Imus', 'countrycode': 'PHL', 'district': 'Southern Tagalog', 'population': 195482}, {
    'id': 810,
    'name': 'Olongapo',
    'countrycode': 'PHL',
    'district': 'Central Luzon',
    'population': 194260
  }, {'id': 811, 'name': 'Binangonan', 'countrycode': 'PHL', 'district': 'Southern Tagalog', 'population': 187691}, {
    'id': 812,
    'name': 'Santa Rosa',
    'countrycode': 'PHL',
    'district': 'Southern Tagalog',
    'population': 185633
  }, {'id': 813, 'name': 'Tagum', 'countrycode': 'PHL', 'district': 'Southern Mindanao', 'population': 179531}, {
    'id': 814,
    'name': 'Tacloban',
    'countrycode': 'PHL',
    'district': 'Eastern Visayas',
    'population': 178639
  }, {'id': 815, 'name': 'Malolos', 'countrycode': 'PHL', 'district': 'Central Luzon', 'population': 175291}, {
    'id': 816,
    'name': 'Mabalacat',
    'countrycode': 'PHL',
    'district': 'Central Luzon',
    'population': 171045
  }, {'id': 817, 'name': 'Cotabato', 'countrycode': 'PHL', 'district': 'Central Mindanao', 'population': 163849}, {
    'id': 818,
    'name': 'Meycauayan',
    'countrycode': 'PHL',
    'district': 'Central Luzon',
    'population': 163037
  }, {'id': 819, 'name': 'Puerto Princesa', 'countrycode': 'PHL', 'district': 'Southern Tagalog', 'population': 161912}, {
    'id': 820,
    'name': 'Legazpi',
    'countrycode': 'PHL',
    'district': 'Bicol',
    'population': 157010
  }, {'id': 821, 'name': 'Silang', 'countrycode': 'PHL', 'district': 'Southern Tagalog', 'population': 156137}, {
    'id': 822,
    'name': 'Ormoc',
    'countrycode': 'PHL',
    'district': 'Eastern Visayas',
    'population': 154297
  }, {'id': 823, 'name': 'San Carlos', 'countrycode': 'PHL', 'district': 'Ilocos', 'population': 154264}, {
    'id': 824,
    'name': 'Kabankalan',
    'countrycode': 'PHL',
    'district': 'Western Visayas',
    'population': 149769
  }, {'id': 825, 'name': 'Talisay', 'countrycode': 'PHL', 'district': 'Central Visayas', 'population': 148110}, {
    'id': 826,
    'name': 'Valencia',
    'countrycode': 'PHL',
    'district': 'Northern Mindanao',
    'population': 147924
  }, {'id': 827, 'name': 'Calbayog', 'countrycode': 'PHL', 'district': 'Eastern Visayas', 'population': 147187}, {
    'id': 828,
    'name': 'Santa Maria',
    'countrycode': 'PHL',
    'district': 'Central Luzon',
    'population': 144282
  }, {'id': 829, 'name': 'Pagadian', 'countrycode': 'PHL', 'district': 'Western Mindanao', 'population': 142515}, {
    'id': 830,
    'name': 'Cadiz',
    'countrycode': 'PHL',
    'district': 'Western Visayas',
    'population': 141954
  }, {'id': 831, 'name': 'Bago', 'countrycode': 'PHL', 'district': 'Western Visayas', 'population': 141721}, {
    'id': 832,
    'name': 'Toledo',
    'countrycode': 'PHL',
    'district': 'Central Visayas',
    'population': 141174
  }, {'id': 833, 'name': 'Naga', 'countrycode': 'PHL', 'district': 'Bicol', 'population': 137810}, {
    'id': 834,
    'name': 'San Mateo',
    'countrycode': 'PHL',
    'district': 'Southern Tagalog',
    'population': 135603
  }, {'id': 835, 'name': 'Panabo', 'countrycode': 'PHL', 'district': 'Southern Mindanao', 'population': 133950}, {
    'id': 836,
    'name': 'Koronadal',
    'countrycode': 'PHL',
    'district': 'Southern Mindanao',
    'population': 133786
  }, {'id': 837, 'name': 'Marawi', 'countrycode': 'PHL', 'district': 'Central Mindanao', 'population': 131090}, {
    'id': 838,
    'name': 'Dagupan',
    'countrycode': 'PHL',
    'district': 'Ilocos',
    'population': 130328
  }, {'id': 839, 'name': 'Sagay', 'countrycode': 'PHL', 'district': 'Western Visayas', 'population': 129765}, {
    'id': 840,
    'name': 'Roxas',
    'countrycode': 'PHL',
    'district': 'Western Visayas',
    'population': 126352
  }, {'id': 841, 'name': 'Lubao', 'countrycode': 'PHL', 'district': 'Central Luzon', 'population': 125699}, {
    'id': 842,
    'name': 'Digos',
    'countrycode': 'PHL',
    'district': 'Southern Mindanao',
    'population': 125171
  }, {'id': 843, 'name': 'San Miguel', 'countrycode': 'PHL', 'district': 'Central Luzon', 'population': 123824}, {
    'id': 844,
    'name': 'Malaybalay',
    'countrycode': 'PHL',
    'district': 'Northern Mindanao',
    'population': 123672
  }, {'id': 845, 'name': 'Tuguegarao', 'countrycode': 'PHL', 'district': 'Cagayan Valley', 'population': 120645}, {
    'id': 846,
    'name': 'Ilagan',
    'countrycode': 'PHL',
    'district': 'Cagayan Valley',
    'population': 119990
  }, {'id': 847, 'name': 'Baliuag', 'countrycode': 'PHL', 'district': 'Central Luzon', 'population': 119675}, {
    'id': 848,
    'name': 'Surigao',
    'countrycode': 'PHL',
    'district': 'Caraga',
    'population': 118534
  }, {'id': 849, 'name': 'San Carlos', 'countrycode': 'PHL', 'district': 'Western Visayas', 'population': 118259}, {
    'id': 850,
    'name': 'San Juan del Monte',
    'countrycode': 'PHL',
    'district': 'National Capital Reg',
    'population': 117680
  }, {'id': 851, 'name': 'Tanauan', 'countrycode': 'PHL', 'district': 'Southern Tagalog', 'population': 117539}, {
    'id': 852,
    'name': 'Concepcion',
    'countrycode': 'PHL',
    'district': 'Central Luzon',
    'population': 115171
  }, {'id': 853, 'name': 'Rodriguez (Montalban)', 'countrycode': 'PHL', 'district': 'Southern Tagalog', 'population': 115167}, {
    'id': 854,
    'name': 'Sariaya',
    'countrycode': 'PHL',
    'district': 'Southern Tagalog',
    'population': 114568
  }, {'id': 855, 'name': 'Malasiqui', 'countrycode': 'PHL', 'district': 'Ilocos', 'population': 113190}, {
    'id': 856,
    'name': 'General Mariano Alvarez',
    'countrycode': 'PHL',
    'district': 'Southern Tagalog',
    'population': 112446
  }, {'id': 857, 'name': 'Urdaneta', 'countrycode': 'PHL', 'district': 'Ilocos', 'population': 111582}, {
    'id': 858,
    'name': 'Hagonoy',
    'countrycode': 'PHL',
    'district': 'Central Luzon',
    'population': 111425
  }, {'id': 859, 'name': 'San Jose', 'countrycode': 'PHL', 'district': 'Southern Tagalog', 'population': 111009}, {
    'id': 860,
    'name': 'Polomolok',
    'countrycode': 'PHL',
    'district': 'Southern Mindanao',
    'population': 110709
  }, {'id': 861, 'name': 'Santiago', 'countrycode': 'PHL', 'district': 'Cagayan Valley', 'population': 110531}, {
    'id': 862,
    'name': 'Tanza',
    'countrycode': 'PHL',
    'district': 'Southern Tagalog',
    'population': 110517
  }, {'id': 863, 'name': 'Ozamis', 'countrycode': 'PHL', 'district': 'Northern Mindanao', 'population': 110420}, {
    'id': 864,
    'name': 'Mexico',
    'countrycode': 'PHL',
    'district': 'Central Luzon',
    'population': 109481
  }, {'id': 865, 'name': 'San Jose', 'countrycode': 'PHL', 'district': 'Central Luzon', 'population': 108254}, {
    'id': 866,
    'name': 'Silay',
    'countrycode': 'PHL',
    'district': 'Western Visayas',
    'population': 107722
  }, {'id': 867, 'name': 'General Trias', 'countrycode': 'PHL', 'district': 'Southern Tagalog', 'population': 107691}, {
    'id': 868,
    'name': 'Tabaco',
    'countrycode': 'PHL',
    'district': 'Bicol',
    'population': 107166
  }, {'id': 869, 'name': 'Cabuyao', 'countrycode': 'PHL', 'district': 'Southern Tagalog', 'population': 106630}, {
    'id': 870,
    'name': 'Calapan',
    'countrycode': 'PHL',
    'district': 'Southern Tagalog',
    'population': 105910
  }, {'id': 871, 'name': 'Mati', 'countrycode': 'PHL', 'district': 'Southern Mindanao', 'population': 105908}, {
    'id': 872,
    'name': 'Midsayap',
    'countrycode': 'PHL',
    'district': 'Central Mindanao',
    'population': 105760
  }, {'id': 873, 'name': 'Cauayan', 'countrycode': 'PHL', 'district': 'Cagayan Valley', 'population': 103952}, {
    'id': 874,
    'name': 'Gingoog',
    'countrycode': 'PHL',
    'district': 'Northern Mindanao',
    'population': 102379
  }, {'id': 875, 'name': 'Dumaguete', 'countrycode': 'PHL', 'district': 'Central Visayas', 'population': 102265}, {
    'id': 876,
    'name': 'San Fernando',
    'countrycode': 'PHL',
    'district': 'Ilocos',
    'population': 102082
  }, {'id': 877, 'name': 'Arayat', 'countrycode': 'PHL', 'district': 'Central Luzon', 'population': 101792}, {
    'id': 878,
    'name': 'Bayawan (Tulong)',
    'countrycode': 'PHL',
    'district': 'Central Visayas',
    'population': 101391
  }, {'id': 879, 'name': 'Kidapawan', 'countrycode': 'PHL', 'district': 'Central Mindanao', 'population': 101205}, {
    'id': 880,
    'name': 'Daraga (Locsin)',
    'countrycode': 'PHL',
    'district': 'Bicol',
    'population': 101031
  }, {'id': 881, 'name': 'Marilao', 'countrycode': 'PHL', 'district': 'Central Luzon', 'population': 101017}, {
    'id': 882,
    'name': 'Malita',
    'countrycode': 'PHL',
    'district': 'Southern Mindanao',
    'population': 100000
  }, {'id': 883, 'name': 'Dipolog', 'countrycode': 'PHL', 'district': 'Western Mindanao', 'population': 99862}, {
    'id': 884,
    'name': 'Cavite',
    'countrycode': 'PHL',
    'district': 'Southern Tagalog',
    'population': 99367
  }, {'id': 885, 'name': 'Danao', 'countrycode': 'PHL', 'district': 'Central Visayas', 'population': 98781}, {
    'id': 886,
    'name': 'Bislig',
    'countrycode': 'PHL',
    'district': 'Caraga',
    'population': 97860
  }, {'id': 887, 'name': 'Talavera', 'countrycode': 'PHL', 'district': 'Central Luzon', 'population': 97329}, {
    'id': 888,
    'name': 'Guagua',
    'countrycode': 'PHL',
    'district': 'Central Luzon',
    'population': 96858
  }, {'id': 889, 'name': 'Bayambang', 'countrycode': 'PHL', 'district': 'Ilocos', 'population': 96609}, {
    'id': 890,
    'name': 'Nasugbu',
    'countrycode': 'PHL',
    'district': 'Southern Tagalog',
    'population': 96113
  }, {'id': 891, 'name': 'Baybay', 'countrycode': 'PHL', 'district': 'Eastern Visayas', 'population': 95630}, {
    'id': 892,
    'name': 'Capas',
    'countrycode': 'PHL',
    'district': 'Central Luzon',
    'population': 95219
  }, {'id': 893, 'name': 'Sultan Kudarat', 'countrycode': 'PHL', 'district': 'ARMM', 'population': 94861}, {
    'id': 894,
    'name': 'Laoag',
    'countrycode': 'PHL',
    'district': 'Ilocos',
    'population': 94466
  }, {'id': 895, 'name': 'Bayugan', 'countrycode': 'PHL', 'district': 'Caraga', 'population': 93623}, {
    'id': 896,
    'name': 'Malungon',
    'countrycode': 'PHL',
    'district': 'Southern Mindanao',
    'population': 93232
  }, {'id': 897, 'name': 'Santa Cruz', 'countrycode': 'PHL', 'district': 'Southern Tagalog', 'population': 92694}, {
    'id': 898,
    'name': 'Sorsogon',
    'countrycode': 'PHL',
    'district': 'Bicol',
    'population': 92512
  }, {'id': 899, 'name': 'Candelaria', 'countrycode': 'PHL', 'district': 'Southern Tagalog', 'population': 92429}, {
    'id': 900,
    'name': 'Ligao',
    'countrycode': 'PHL',
    'district': 'Bicol',
    'population': 90603
  }, {'id': 901, 'name': 'TÃ³rshavn', 'countrycode': 'FRO', 'district': 'Streymoyar', 'population': 14542}, {
    'id': 902,
    'name': 'Libreville',
    'countrycode': 'GAB',
    'district': 'Estuaire',
    'population': 419000
  }, {'id': 903, 'name': 'Serekunda', 'countrycode': 'GMB', 'district': 'Kombo St Mary', 'population': 102600}, {
    'id': 904,
    'name': 'Banjul',
    'countrycode': 'GMB',
    'district': 'Banjul',
    'population': 42326
  }, {'id': 905, 'name': 'Tbilisi', 'countrycode': 'GEO', 'district': 'Tbilisi', 'population': 1235200}, {
    'id': 906,
    'name': 'Kutaisi',
    'countrycode': 'GEO',
    'district': 'Imereti',
    'population': 240900
  }, {'id': 907, 'name': 'Rustavi', 'countrycode': 'GEO', 'district': 'Kvemo Kartli', 'population': 155400}, {
    'id': 908,
    'name': 'Batumi',
    'countrycode': 'GEO',
    'district': 'Adzaria [AtÂšara]',
    'population': 137700
  }, {'id': 909, 'name': 'Sohumi', 'countrycode': 'GEO', 'district': 'Abhasia [Aphazeti]', 'population': 111700}, {
    'id': 910,
    'name': 'Accra',
    'countrycode': 'GHA',
    'district': 'Greater Accra',
    'population': 1070000
  }, {'id': 911, 'name': 'Kumasi', 'countrycode': 'GHA', 'district': 'Ashanti', 'population': 385192}, {
    'id': 912,
    'name': 'Tamale',
    'countrycode': 'GHA',
    'district': 'Northern',
    'population': 151069
  }, {'id': 913, 'name': 'Tema', 'countrycode': 'GHA', 'district': 'Greater Accra', 'population': 109975}, {
    'id': 914,
    'name': 'Sekondi-Takoradi',
    'countrycode': 'GHA',
    'district': 'Western',
    'population': 103653
  }, {'id': 915, 'name': 'Gibraltar', 'countrycode': 'GIB', 'district': 'Â–', 'population': 27025}, {
    'id': 916,
    'name': 'Saint GeorgeÂ´s',
    'countrycode': 'GRD',
    'district': 'St George',
    'population': 4621
  }, {'id': 917, 'name': 'Nuuk', 'countrycode': 'GRL', 'district': 'Kitaa', 'population': 13445}, {
    'id': 918,
    'name': 'Les Abymes',
    'countrycode': 'GLP',
    'district': 'Grande-Terre',
    'population': 62947
  }, {'id': 919, 'name': 'Basse-Terre', 'countrycode': 'GLP', 'district': 'Basse-Terre', 'population': 12433}, {
    'id': 920,
    'name': 'Tamuning',
    'countrycode': 'GUM',
    'district': 'Â–',
    'population': 9500
  }, {'id': 921, 'name': 'AgaÃ±a', 'countrycode': 'GUM', 'district': 'Â–', 'population': 1139}, {
    'id': 922,
    'name': 'Ciudad de Guatemala',
    'countrycode': 'GTM',
    'district': 'Guatemala',
    'population': 823301
  }, {'id': 923, 'name': 'Mixco', 'countrycode': 'GTM', 'district': 'Guatemala', 'population': 209791}, {
    'id': 924,
    'name': 'Villa Nueva',
    'countrycode': 'GTM',
    'district': 'Guatemala',
    'population': 101295
  }, {'id': 925, 'name': 'Quetzaltenango', 'countrycode': 'GTM', 'district': 'Quetzaltenango', 'population': 90801}, {
    'id': 926,
    'name': 'Conakry',
    'countrycode': 'GIN',
    'district': 'Conakry',
    'population': 1090610
  }, {'id': 927, 'name': 'Bissau', 'countrycode': 'GNB', 'district': 'Bissau', 'population': 241000}, {
    'id': 928,
    'name': 'Georgetown',
    'countrycode': 'GUY',
    'district': 'Georgetown',
    'population': 254000
  }, {'id': 929, 'name': 'Port-au-Prince', 'countrycode': 'HTI', 'district': 'Ouest', 'population': 884472}, {
    'id': 930,
    'name': 'Carrefour',
    'countrycode': 'HTI',
    'district': 'Ouest',
    'population': 290204
  }, {'id': 931, 'name': 'Delmas', 'countrycode': 'HTI', 'district': 'Ouest', 'population': 240429}, {
    'id': 932,
    'name': 'Le-Cap-HaÃ¯tien',
    'countrycode': 'HTI',
    'district': 'Nord',
    'population': 102233
  }, {'id': 933, 'name': 'Tegucigalpa', 'countrycode': 'HND', 'district': 'Distrito Central', 'population': 813900}, {
    'id': 934,
    'name': 'San Pedro Sula',
    'countrycode': 'HND',
    'district': 'CortÃ©s',
    'population': 383900
  }, {'id': 935, 'name': 'La Ceiba', 'countrycode': 'HND', 'district': 'AtlÃ¡ntida', 'population': 89200}, {
    'id': 936,
    'name': 'Kowloon and New Kowloon',
    'countrycode': 'HKG',
    'district': 'Kowloon and New Kowl',
    'population': 1987996
  }, {'id': 937, 'name': 'Victoria', 'countrycode': 'HKG', 'district': 'Hongkong', 'population': 1312637}, {
    'id': 938,
    'name': 'Longyearbyen',
    'countrycode': 'SJM',
    'district': 'LÃ¤nsimaa',
    'population': 1438
  }, {'id': 939, 'name': 'Jakarta', 'countrycode': 'IDN', 'district': 'Jakarta Raya', 'population': 9604900}, {
    'id': 940,
    'name': 'Surabaya',
    'countrycode': 'IDN',
    'district': 'East Java',
    'population': 2663820
  }, {'id': 941, 'name': 'Bandung', 'countrycode': 'IDN', 'district': 'West Java', 'population': 2429000}, {
    'id': 942,
    'name': 'Medan',
    'countrycode': 'IDN',
    'district': 'Sumatera Utara',
    'population': 1843919
  }, {'id': 943, 'name': 'Palembang', 'countrycode': 'IDN', 'district': 'Sumatera Selatan', 'population': 1222764}, {
    'id': 944,
    'name': 'Tangerang',
    'countrycode': 'IDN',
    'district': 'West Java',
    'population': 1198300
  }, {'id': 945, 'name': 'Semarang', 'countrycode': 'IDN', 'district': 'Central Java', 'population': 1104405}, {
    'id': 946,
    'name': 'Ujung Pandang',
    'countrycode': 'IDN',
    'district': 'Sulawesi Selatan',
    'population': 1060257
  }, {'id': 947, 'name': 'Malang', 'countrycode': 'IDN', 'district': 'East Java', 'population': 716862}, {
    'id': 948,
    'name': 'Bandar Lampung',
    'countrycode': 'IDN',
    'district': 'Lampung',
    'population': 680332
  }, {'id': 949, 'name': 'Bekasi', 'countrycode': 'IDN', 'district': 'West Java', 'population': 644300}, {
    'id': 950,
    'name': 'Padang',
    'countrycode': 'IDN',
    'district': 'Sumatera Barat',
    'population': 534474
  }, {'id': 951, 'name': 'Surakarta', 'countrycode': 'IDN', 'district': 'Central Java', 'population': 518600}, {
    'id': 952,
    'name': 'Banjarmasin',
    'countrycode': 'IDN',
    'district': 'Kalimantan Selatan',
    'population': 482931
  }, {'id': 953, 'name': 'Pekan Baru', 'countrycode': 'IDN', 'district': 'Riau', 'population': 438638}, {
    'id': 954,
    'name': 'Denpasar',
    'countrycode': 'IDN',
    'district': 'Bali',
    'population': 435000
  }, {'id': 955, 'name': 'Yogyakarta', 'countrycode': 'IDN', 'district': 'Yogyakarta', 'population': 418944}, {
    'id': 956,
    'name': 'Pontianak',
    'countrycode': 'IDN',
    'district': 'Kalimantan Barat',
    'population': 409632
  }, {'id': 957, 'name': 'Samarinda', 'countrycode': 'IDN', 'district': 'Kalimantan Timur', 'population': 399175}, {
    'id': 958,
    'name': 'Jambi',
    'countrycode': 'IDN',
    'district': 'Jambi',
    'population': 385201
  }, {'id': 959, 'name': 'Depok', 'countrycode': 'IDN', 'district': 'West Java', 'population': 365200}, {
    'id': 960,
    'name': 'Cimahi',
    'countrycode': 'IDN',
    'district': 'West Java',
    'population': 344600
  }, {'id': 961, 'name': 'Balikpapan', 'countrycode': 'IDN', 'district': 'Kalimantan Timur', 'population': 338752}, {
    'id': 962,
    'name': 'Manado',
    'countrycode': 'IDN',
    'district': 'Sulawesi Utara',
    'population': 332288
  }, {'id': 963, 'name': 'Mataram', 'countrycode': 'IDN', 'district': 'Nusa Tenggara Barat', 'population': 306600}, {
    'id': 964,
    'name': 'Pekalongan',
    'countrycode': 'IDN',
    'district': 'Central Java',
    'population': 301504
  }, {'id': 965, 'name': 'Tegal', 'countrycode': 'IDN', 'district': 'Central Java', 'population': 289744}, {
    'id': 966,
    'name': 'Bogor',
    'countrycode': 'IDN',
    'district': 'West Java',
    'population': 285114
  }, {'id': 967, 'name': 'Ciputat', 'countrycode': 'IDN', 'district': 'West Java', 'population': 270800}, {
    'id': 968,
    'name': 'Pondokgede',
    'countrycode': 'IDN',
    'district': 'West Java',
    'population': 263200
  }, {'id': 969, 'name': 'Cirebon', 'countrycode': 'IDN', 'district': 'West Java', 'population': 254406}, {
    'id': 970,
    'name': 'Kediri',
    'countrycode': 'IDN',
    'district': 'East Java',
    'population': 253760
  }, {'id': 971, 'name': 'Ambon', 'countrycode': 'IDN', 'district': 'Molukit', 'population': 249312}, {
    'id': 972,
    'name': 'Jember',
    'countrycode': 'IDN',
    'district': 'East Java',
    'population': 218500
  }, {'id': 973, 'name': 'Cilacap', 'countrycode': 'IDN', 'district': 'Central Java', 'population': 206900}, {
    'id': 974,
    'name': 'Cimanggis',
    'countrycode': 'IDN',
    'district': 'West Java',
    'population': 205100
  }, {'id': 975, 'name': 'Pematang Siantar', 'countrycode': 'IDN', 'district': 'Sumatera Utara', 'population': 203056}, {
    'id': 976,
    'name': 'Purwokerto',
    'countrycode': 'IDN',
    'district': 'Central Java',
    'population': 202500
  }, {'id': 977, 'name': 'Ciomas', 'countrycode': 'IDN', 'district': 'West Java', 'population': 187400}, {
    'id': 978,
    'name': 'Tasikmalaya',
    'countrycode': 'IDN',
    'district': 'West Java',
    'population': 179800
  }, {'id': 979, 'name': 'Madiun', 'countrycode': 'IDN', 'district': 'East Java', 'population': 171532}, {
    'id': 980,
    'name': 'Bengkulu',
    'countrycode': 'IDN',
    'district': 'Bengkulu',
    'population': 146439
  }, {'id': 981, 'name': 'Karawang', 'countrycode': 'IDN', 'district': 'West Java', 'population': 145000}, {
    'id': 982,
    'name': 'Banda Aceh',
    'countrycode': 'IDN',
    'district': 'Aceh',
    'population': 143409
  }, {'id': 983, 'name': 'Palu', 'countrycode': 'IDN', 'district': 'Sulawesi Tengah', 'population': 142800}, {
    'id': 984,
    'name': 'Pasuruan',
    'countrycode': 'IDN',
    'district': 'East Java',
    'population': 134019
  }, {'id': 985, 'name': 'Kupang', 'countrycode': 'IDN', 'district': 'Nusa Tenggara Timur', 'population': 129300}, {
    'id': 986,
    'name': 'Tebing Tinggi',
    'countrycode': 'IDN',
    'district': 'Sumatera Utara',
    'population': 129300
  }, {'id': 987, 'name': 'Percut Sei Tuan', 'countrycode': 'IDN', 'district': 'Sumatera Utara', 'population': 129000}, {
    'id': 988,
    'name': 'Binjai',
    'countrycode': 'IDN',
    'district': 'Sumatera Utara',
    'population': 127222
  }, {'id': 989, 'name': 'Sukabumi', 'countrycode': 'IDN', 'district': 'West Java', 'population': 125766}, {
    'id': 990,
    'name': 'Waru',
    'countrycode': 'IDN',
    'district': 'East Java',
    'population': 124300
  }, {'id': 991, 'name': 'Pangkal Pinang', 'countrycode': 'IDN', 'district': 'Sumatera Selatan', 'population': 124000}, {
    'id': 992,
    'name': 'Magelang',
    'countrycode': 'IDN',
    'district': 'Central Java',
    'population': 123800
  }, {'id': 993, 'name': 'Blitar', 'countrycode': 'IDN', 'district': 'East Java', 'population': 122600}, {
    'id': 994,
    'name': 'Serang',
    'countrycode': 'IDN',
    'district': 'West Java',
    'population': 122400
  }, {'id': 995, 'name': 'Probolinggo', 'countrycode': 'IDN', 'district': 'East Java', 'population': 120770}, {
    'id': 996,
    'name': 'Cilegon',
    'countrycode': 'IDN',
    'district': 'West Java',
    'population': 117000
  }, {'id': 997, 'name': 'Cianjur', 'countrycode': 'IDN', 'district': 'West Java', 'population': 114300}, {
    'id': 998,
    'name': 'Ciparay',
    'countrycode': 'IDN',
    'district': 'West Java',
    'population': 111500
  }, {'id': 999, 'name': 'Lhokseumawe', 'countrycode': 'IDN', 'district': 'Aceh', 'population': 109600}
  ];

