import GammaComponent from './gammaComponent';
import wineData from '../../utility/data/Wine-Data.json';
import { useEffect, useState } from 'react';
import {
	dataVisulation,
	wineClass,
} from '../../utility/class-wise/classWiseData';

const GammaContainer = () => {
	const [classData, setClassData] = useState<number[]>([]);
	const [tableData, setTableData] = useState<any[]>([]);

	useEffect(() => {
		setClassData(wineClass(wineData.map((item) => item.Alcohol)));
	}, []);

	// divide wine data based on alcohol and call datavisulation function for find mean,median,mode
	const divideData = (classData: number[]) => {
		const data = classData.map((item) =>
			wineData
				.filter((value) => value.Alcohol === item + 1)
				.map((item) => +((+item.Ash * item.Hue) / item.Magnesium).toFixed(3)),
		);
		setTableData(dataVisulation(data));
	};

	useEffect(() => {
		classData.length > 0 && divideData(classData);
	}, [ classData]);

	return <GammaComponent classData={classData} tableData={tableData} />;
};

export default GammaContainer;
