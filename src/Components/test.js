
const res = {
    data1:[],
    data2: true,
    data3: 'ebrahim',
    data4: 20,
    data5: 19.78
}

for(let i in res)
{
    console.log(Array.isArray(res[i]));    
}
