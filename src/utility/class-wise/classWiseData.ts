// Function for finding class of alcohol 

export const wineClass = (value:number[]) => {
    const classValue = new Set(value);
    const classArr = new Array(0)
    for(let i = 0;i < classValue.size; i++){
        classArr.push(i)
    }
    return classArr
}

export const dataVisulation = (data:any[]) => {
    // Function for find mean of given data

    const mean = data.map((item,index) => (
        item.reduce((a:number,b:number) => a+b) / data[index].length
    ));

    //Function for find median of given data

    const median = data.map((value) => {
      if(value.length % 2 === 0){
        const sortData = value.sort((a:number,b:number) => a-b)
        const index = Math.floor(sortData.length / 2);
        const medianData = (sortData[index] + sortData[index + 1]) / 2;
        return medianData;
      }
      else {
        const sortData = value.sort((a:number,b:number) => a-b);
        const index = (sortData.length + 1) / 2;
        const medainData = sortData[index];
        return medainData
      }
    })
    
    // finding mode of given data

    var elementCounts = data.map(value => value.reduce((count:any, item:any) => (count[item] = count[item] + 1 || 1, count), {}))

    let max:any[] = [];

    elementCounts.map((item:number) => {
         max.push(Math.max(...Object.values(item)))
    })

    const mode = elementCounts.map((item,index) => {
        return +Object.keys(item).filter(value => item[value] === max[index])[0]
    })

    const visulaziedData = [{ format: 'Mean',  ...mean },
	{
		format: 'Median',
        ...median
		
	},
	{ format: 'Mode', ...mode }]

    return visulaziedData;
}