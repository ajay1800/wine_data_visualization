import FlavanoidsComponent from './flavanoidsComponent';
import wineData from '../../utility/data/Wine-Data.json';
import { useEffect, useState } from 'react';
import {
	dataVisulation,
	wineClass,
} from '../../utility/class-wise/classWiseData';

const FlavanoidsContainer = () => {
	// state for flavanoids data
	const [flavanoidsData, setFlavanoidsData] = useState<number[]>([]);
	const [classData, setClassData] = useState<number[]>([]);
	const [tableData, setTableData] = useState<any[]>([]);

	useEffect(() => {
		const flavanoids = wineData.map((item) => +item.Flavanoids);
		setFlavanoidsData(flavanoids);
		setClassData(wineClass(wineData.map((item) => item.Alcohol)));
	}, []);

	// divide wine data based on alcohol and call datavisulation function for find mean,median,mode
	const divideData = (classData: number[]) => {
		const data = classData.map((item) =>
			wineData
				.filter((value) => value.Alcohol === item + 1)
				.map((item) => +item.Flavanoids )
		);
		setTableData(dataVisulation(data));
	};

	useEffect(() => {
		classData.length > 0 && divideData(classData);
	}, [flavanoidsData, classData]);

	return <FlavanoidsComponent classData={classData} tableData={tableData} />;
};

export default FlavanoidsContainer;
