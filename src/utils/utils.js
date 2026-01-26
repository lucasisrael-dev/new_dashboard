const convertPtBrStringToNumber = function(value) {
  return Number(value.replace('.', '').replace(',','.'));
}

const convertPtBrDateStringToDate = function(date) {
  const arrayDate = date.split('/');
  const convertedDate = `${arrayDate[2]}-${arrayDate[1]}-${arrayDate[0]}T00:00:00.000`
  return new Date(Date.parse(convertedDate));
}

export const papaparseConfig = {
	delimiter: ";",	// auto-detect
	newline: "\r\n",	// auto-detect
	skipEmptyLines: true,
	skipFirstNLines: 37
}

papaparseConfig.transform = function (value, column) {
  
  if (column >= 12 && column <= 17 ) {
    return convertPtBrStringToNumber(value)
  }
  if (column == 0) {
    return convertPtBrDateStringToDate(value)
  }
  return value;
}

export const setBarHeight = function (meta, venda) {
  let tamanho = [16, 0];
  if (meta > venda) {
    tamanho[1] = (16 * venda) / meta;
  } else {
    tamanho[0] = (16 * meta) / venda;
    tamanho[1] = 16;
  }
  return tamanho;
}
