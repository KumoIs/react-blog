export function union(data, compare, result = []) {
  for (let i = 0; i < data.length; i++) {
    let flag = false;
    let temp = data[i];
    for (let j = 0; j< compare.length; j++) {
      if (temp.key === compare[j]) {
        flag = true;
        break;
      }
    }

    if (flag) {
      result.push(temp);
      if (result.length !== compare.length) {
        union(result[0].routes, compare, result)
      }
    }
  }
  return result;
}
