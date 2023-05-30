import './flavanoids.css';

const FlavanoidsComponent = ({
	classData,
	tableData,
}: FlavanoidsComponentProps) => {
	return (
		<div className={'container'}>
			<div>
				<h2>Flavanoids</h2>
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
								<td style={{ fontWeight: 700 }}>Flavanoids {item.format}</td>
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

interface FlavanoidsComponentProps {
	classData: number[];
	tableData: any[];
}
export default FlavanoidsComponent;
