import GammaComponent from './gammaComponent';
import wineData from '../../utility/data/Wine-Data.json';
import { useEffect, useState } from 'react';
import {
	dataVisulation,
	wineClass,
} from '../../utility/class-wise/classWiseData';

const GammaContainer = () => {
	const [gammaData, setGammaData] = useState<number[]>([]);
	const [classData, setClassData] = useState<number[]>([]);
	const [tableData, setTableData] = useState<any[]>([]);

	useEffect(() => {
		const gamma = wineData.map(
			(item) => (+item.Ash * item.Hue) / item.Magnesium,
		);
		setGammaData(gamma);
		setClassData(wineClass(wineData.map((item) => item.Alcohol)));
	}, []);

	// divide wine data based on alcohol and call datavisulation function for find mean,median,mode
	const divideData = (classData: number[]) => {
		const data = classData.map((item) =>
			wineData
				.filter((value) => value.Alcohol === item + 1)
				.map((item) => (+item.Ash * item.Hue) / item.Magnesium),
		);
		setTableData(dataVisulation(data));
	};

	useEffect(() => {
		classData.length > 0 && divideData(classData);
	}, [gammaData, classData]);

	return <GammaComponent classData={classData} tableData={tableData} />;
};

export default GammaContainer;
