import './gamma.css';

const GammaComponent = ({ classData, tableData }: GammaComponentProps) => {
	return (
		<div className={'container'}>
			<div>
				<h2>Gamma</h2>
			</div>
			<div className={'table_data'}>
				<table>
					<tr>
						<th>Measure</th>
						{classData.map((_, index) => (
							<th key={index}>Class {index + 1}</th>
						))}
					</tr>
					{tableData.length > 0 &&
						tableData.map((item: any, index) => (
							<tr key={index}>
								<td style={{ fontWeight: 700 }}>Gamma {item.format}</td>
								{classData.map((_, index) => (
									<td key={index}>{item[index].toFixed(3)}</td>
								))}
							</tr>
						))}
				</table>
			</div>
		</div>
	);
};

interface GammaComponentProps {
	tableData: any[];
	classData: number[];
}

export default GammaComponent;
