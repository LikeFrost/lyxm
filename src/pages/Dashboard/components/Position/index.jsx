import { Chart, Label, Point, ScatterChart } from 'bizcharts';
import React from 'react';

const data = [
	{
		'id':'24124',
		'经度':'35.42',
		'纬度':'46.42',
	},
	{
		'id':'23254',
		'经度':'32.42',
		'纬度':'67.42',
	},
	{
		'id':'25486',
		'经度':'98.42',
		'纬度':'12.42',
	},
	{
		'id':'547',
		'经度':'164.42',
		'纬度':'58.42',
	},
	{
		'id':'1422',
		'经度':'98.42',
		'纬度':'147.42',
	},
	
];


export default function Position() {
  return (
	  <ScatterChart
	  	data={data}
		  xField='经度'
		  yField='纬度'
		  xAxis={{
			  label:{
				  style:{
					  fill:'skyblue'
				  }
			  }
		  }}
		  yAxis={{
			label:{
				style:{
					fill:'skyblue'
				}
			}
		}}
		  tooltip={
			  {
				  visible:true,
				  offset:-20,
				  fields:['经度','纬度','id']
			  }
		  }
		/>
  )
}