
import React, {Component} from 'react';

var jdez
var jdjq
var jq 
var jq0;

var Gstr={
	gongli:"",
	nongli:"",
	jieqi:"",
	siZhu:[],
	yueJiang:"",
	tianPan:[],
	siKe:[],
	
	siKeWuXing:[],
	siKeShengKe:[],
	siKeYinYang:[],
	siKeTianJiang:[],
	
	sanChuan:[],
	sanChuanDunGan:[],
	sanChuanTianJiang:[],
	
	dunGan:[],
	tianJiang:[],
	liuQin:[]
};


class SixCourseModule extends React.Component {

  constructor(porp) {
				super(porp);
			
	}

	luiyin_720(day,i){
		var t720 = {"\u5e9a\u5b50": ["\u8fb0\u7533\u5b50-\u5143", "\u5df3\u620c\u536f-\u91cd", "\u5bc5\u7533\u5bc5-\u8fd4", "\u620c\u5df3\u5b50-\u6bd4", "\u5b50\u7533\u8fb0-\u91cd", "\u5348\u536f\u5b50-\u77e5", "\u5348\u8fb0\u5bc5-\u6d89", "\u620c\u9149\u7533-\u5143", "\u7533\u5bc5\u5df3-\u4f0f", "\u5bc5\u536f\u8fb0-\u77e5", "\u8fb0\u5348\u7533-\u6d89", "\u5348\u9149\u5b50-\u9065"], "\u4e59\u4ea5": ["\u672a\u536f\u4ea5-\u6d89", "\u4e11\u620c\u672a-\u91cd", "\u9149\u672a\u5df3-\u9065", "\u620c\u9149\u7533-\u5143", "\u8fb0\u4ea5\u5df3-\u4f0f", "\u4e11\u5bc5\u536f-\u5143", "\u7533\u620c\u5b50-\u91cd", "\u672a\u620c\u4e11-\u91cd", "\u672a\u4ea5\u536f-\u91cd", "\u5bc5\u672a\u5b50-\u91cd", "\u5df3\u4ea5\u5df3-\u8fd4", "\u5348\u4e11\u7533-\u91cd"], "\u4e59\u672a": ["\u536f\u4ea5\u672a-\u5143", "\u4e11\u620c\u672a-\u91cd", "\u4ea5\u5bc5\u5df3-\u6634", "\u620c\u536f\u5348-\u6634", "\u8fb0\u672a\u4e11-\u4f0f", "\u9149\u620c\u4ea5-\u9065", "\u7533\u620c\u5b50-\u91cd", "\u672a\u620c\u4e11-\u91cd", "\u4ea5\u536f\u672a-\u91cd", "\u5df3\u620c\u536f-\u6bd4", "\u620c\u8fb0\u620c-\u8fd4", "\u5348\u4e11\u7533-\u91cd"], "\u7532\u7533": ["\u5348\u8fb0\u5bc5-\u6d89", "\u5b50\u4ea5\u620c-\u77e5", "\u5bc5\u5df3\u7533-\u4f0f", "\u8fb0\u5df3\u5348-\u91cd", "\u8fb0\u5348\u7533-\u6d89", "\u7533\u4ea5\u5bc5-\u91cd", "\u8fb0\u7533\u5b50-\u5143", "\u5b50\u5df3\u620c-\u6bd4", "\u5bc5\u7533\u5bc5-\u8fd4", "\u620c\u5df3\u5b50-\u77e5", "\u5b50\u7533\u8fb0-\u6d89", "\u5df3\u5bc5\u4ea5-\u5143"], "\u4e19\u5b50": ["\u5b50\u672a\u5bc5-\u6d89", "\u7533\u8fb0\u5b50-\u9065", "\u5348\u536f\u5b50-\u5143", "\u4e11\u4ea5\u9149-\u91cd", "\u620c\u9149\u7533-\u77e5", "\u5df3\u7533\u5bc5-\u4f0f", "\u5bc5\u536f\u8fb0-\u77e5", "\u8fb0\u5348\u7533-\u91cd", "\u7533\u4ea5\u5bc5-\u91cd", "\u9149\u4e11\u5df3-\u91cd", "\u5df3\u620c\u536f-\u91cd", "\u5348\u5b50\u5348-\u8fd4"], "\u4e19\u5bc5": ["\u5b50\u672a\u5bc5-\u77e5", "\u620c\u5348\u5bc5-\u91cd", "\u4ea5\u5df3\u7533-\u9065", "\u4e11\u4ea5\u9149-\u91cd", "\u5b50\u4ea5\u620c-\u6bd4", "\u5df3\u7533\u5bc5-\u4f0f", "\u8fb0\u5df3\u5348-\u91cd", "\u8fb0\u5348\u7533-\u91cd", "\u7533\u4ea5\u5bc5-\u91cd", "\u9149\u4e11\u5df3-\u91cd", "\u5b50\u5df3\u620c-\u6bd4", "\u5bc5\u7533\u5bc5-\u8fd4"], "\u8f9b\u4e11": ["\u536f\u5df3\u672a-\u5143", "\u5df3\u4e11\u4e11-\u522b", "\u9149\u4e11\u5df3-\u6bd4", "\u536f\u7533\u4e11-\u91cd", "\u4ea5\u672a\u8fb0-\u8fd4", "\u536f\u620c\u5df3-\u91cd", "\u5df3\u4e11\u9149-\u77e5", "\u5df3\u672a\u672a-\u522b", "\u4ea5\u9149\u672a-\u91cd", "\u5b50\u4ea5\u620c-\u91cd", "\u4e11\u620c\u672a-\u4f0f", "\u5bc5\u536f\u8fb0-\u5143"], "\u5e9a\u620c": ["\u8fb0\u7533\u5b50-\u6d89", "\u7533\u4e11\u5348-\u77e5", "\u5bc5\u7533\u5bc5-\u8fd4", "\u620c\u5df3\u5b50-\u6bd4", "\u5b50\u7533\u8fb0-\u91cd", "\u5df3\u5bc5\u4ea5-\u5143", "\u5348\u8fb0\u5bc5-\u5143", "\u5348\u5df3\u8fb0-\u9065", "\u7533\u5bc5\u5df3-\u4f0f", "\u4ea5\u5b50\u4e11-\u91cd", "\u5b50\u5bc5\u8fb0-\u91cd", "\u5bc5\u5df3\u7533-\u9065"], "\u4e01\u4e11": ["\u5df3\u620c\u536f-\u91cd", "\u4ea5\u672a\u4e11-\u8fd4", "\u536f\u620c\u5df3-\u91cd", "\u5df3\u4e11\u9149-\u5143", "\u5b50\u8fb0\u620c-\u6634", "\u4ea5\u9149\u672a-\u91cd", "\u5b50\u4ea5\u620c-\u91cd", "\u4e11\u620c\u672a-\u4f0f", "\u7533\u9149\u620c-\u91cd", "\u9149\u4ea5\u4e11-\u91cd", "\u5348\u620c\u8fb0-\u6634", "\u9149\u4e11\u5df3-\u91cd"], "\u4e01\u9149": ["\u672a\u5b50\u5df3-\u6d89", "\u536f\u9149\u536f-\u8fd4", "\u4ea5\u5348\u4e11-\u91cd", "\u5df3\u4e11\u9149-\u5143", "\u5348\u536f\u5b50-\u5143", "\u4e11\u5df3\u5df3-\u522b", "\u7533\u672a\u5348-\u9065", "\u9149\u672a\u4e11-\u4f0f", "\u4ea5\u5b50\u4e11-\u6bd4", "\u9149\u4ea5\u4e11-\u91cd", "\u5b50\u536f\u5348-\u9065", "\u4ea5\u536f\u672a-\u5143"], "\u5df1\u536f": ["\u5df3\u620c\u536f-\u6bd4", "\u536f\u9149\u536f-\u8fd4", "\u620c\u5df3\u5b50-\u91cd", "\u672a\u536f\u4ea5-\u6d89", "\u5b50\u9149\u5348-\u9065", "\u4ea5\u9149\u672a-\u6d89", "\u4e11\u5b50\u4ea5-\u91cd", "\u536f\u5b50\u5348-\u4f0f", "\u8fb0\u5df3\u5348-\u91cd", "\u4ea5\u4e11\u536f-\u9065", "\u9149\u5b50\u536f-\u91cd", "\u672a\u4ea5\u536f-\u6d89"], "\u7678\u4e11": ["\u5b50\u4ea5\u620c-\u91cd", "\u4e11\u620c\u672a-\u4f0f", "\u5bc5\u536f\u8fb0-\u5143", "\u536f\u5df3\u672a-\u5143", "\u8fb0\u672a\u620c-\u5143", "\u9149\u4e11\u5df3-\u6d89", "\u5348\u4ea5\u8fb0-\u91cd", "\u672a\u4e11\u672a-\u8fd4", "\u536f\u620c\u5df3-\u91cd", "\u5df3\u9149\u4e11-\u5143", "\u620c\u672a\u8fb0-\u5143", "\u4ea5\u9149\u672a-\u91cd"], "\u620a\u8fb0": ["\u5b50\u672a\u5bc5-\u6d89", "\u5b50\u7533\u8fb0-\u91cd", "\u5bc5\u4ea5\u7533-\u5143", "\u4e11\u4ea5\u9149-\u91cd", "\u536f\u5bc5\u4e11-\u5143", "\u5df3\u7533\u5bc5-\u4f0f", "\u5bc5\u5348\u5348-\u522b", "\u7533\u620c\u5b50-\u91cd", "\u4ea5\u5bc5\u5df3-\u9065", "\u5b50\u8fb0\u7533-\u9065", "\u5bc5\u536f\u5b50-\u91cd", "\u5df3\u4ea5\u5df3-\u8fd4"], "\u4e01\u672a": ["\u5df3\u620c\u536f-\u6bd4", "\u5df3\u4e11\u4e11-\u8fd4", "\u9149\u8fb0\u4ea5-\u77e5", "\u4ea5\u536f\u672a-\u5143", "\u4ea5\u8fb0\u8fb0-\u516b", "\u4e11\u5df3\u5df3-\u516b", "\u536f\u5348\u5348-\u516b", "\u672a\u4e11\u620c-\u4f0f", "\u7533\u9149\u620c-\u91cd", "\u9149\u4ea5\u4e11-\u91cd", "\u4ea5\u620c\u620c-\u516b", "\u4ea5\u536f\u672a-\u91cd"], "\u5df1\u5df3": ["\u5df3\u620c\u536f-\u6bd4", "\u5df3\u4ea5\u5df3-\u8fd4", "\u9149\u8fb0\u4ea5-\u6d89", "\u536f\u4ea5\u672a-\u5143", "\u5bc5\u4ea5\u7533-\u9065", "\u4e11\u4ea5\u9149-\u91cd", "\u536f\u5bc5\u4e11-\u5143", "\u5df3\u7533\u5bc5-\u4f0f", "\u7533\u7533\u5348-\u6634", "\u4ea5\u4e11\u536f-\u9065", "\u7533\u4ea5\u5bc5-\u91cd", "\u9149\u4e11\u5df3-\u6d89"], "\u5df1\u4e11": ["\u5df3\u620c\u536f-\u6bd4", "\u4ea5\u672a\u4e11-\u8fd4", "\u536f\u620c\u5df3-\u91cd", "\u5df3\u4e11\u9149-\u6d89", "\u5b50\u8fb0\u620c-\u6634", "\u4ea5\u9149\u672a-\u91cd", "\u5b50\u4ea5\u620c-\u91cd", "\u4e11\u620c\u672a-\u4f0f", "\u5bc5\u536f\u8fb0-\u5143", "\u536f\u5df3\u672a-\u5143", "\u5348\u620c\u8fb0-\u6634", "\u9149\u4e11\u5df3-\u6d89"], "\u58ec\u620c": ["\u4ea5\u5b50\u4e11-\u91cd", "\u5b50\u5bc5\u8fb0-\u91cd", "\u8fb0\u672a\u620c-\u9065", "\u672a\u4ea5\u536f-\u91cd", "\u8fb0\u9149\u5bc5-\u6d89", "\u5df3\u4ea5\u5df3-\u8fd4", "\u5348\u4e11\u7533-\u91cd", "\u672a\u536f\u4ea5-\u6d89", "\u5df3\u5bc5\u4ea5-\u5143", "\u5348\u8fb0\u5bc5-\u5143", "\u620c\u9149\u7533-\u5143", "\u5bc5\u620c\u672a-\u4f0f"], "\u4e01\u4ea5": ["\u5df3\u620c\u536f-\u91cd", "\u5df3\u4ea5\u5df3-\u8fd4", "\u5348\u4e11\u7533-\u91cd", "\u672a\u536f\u4ea5-\u6d89", "\u5df3\u5bc5\u4ea5-\u5143", "\u9149\u672a\u5df3-\u9065", "\u620c\u9149\u7533-\u5143", "\u4ea5\u672a\u4e11-\u4f0f", "\u7533\u9149\u620c-\u91cd", "\u9149\u4ea5\u4e11-\u91cd", "\u5348\u620c\u5bc5-\u6634", "\u672a\u4ea5\u536f-\u91cd"], "\u8f9b\u672a": ["\u5bc5\u8fb0\u5348-\u9065", "\u4ea5\u4e11\u4e11-\u522b", "\u4ea5\u536f\u672a-\u6bd4", "\u5df3\u620c\u536f-\u6d89", "\u5df3\u4e11\u8fb0-\u8fd4", "\u9149\u8fb0\u4ea5-\u6d89", "\u536f\u4ea5\u672a-\u77e5", "\u4ea5\u672a\u672a-\u522b", "\u5348\u8fb0\u5bc5-\u5143", "\u5df3\u8fb0\u536f-\u9065", "\u672a\u4e11\u620c-\u4f0f", "\u7533\u4ea5\u7533-\u6634"], "\u5df1\u672a": ["\u5df3\u620c\u536f-\u6bd4", "\u5df3\u4e11\u4e11-\u8fd4", "\u9149\u8fb0\u4ea5-\u77e5", "\u536f\u4ea5\u672a-\u5143", "\u4ea5\u8fb0\u8fb0-\u516b", "\u4e11\u5df3\u5df3-\u516b", "\u536f\u5348\u5348-\u516b", "\u672a\u4e11\u620c-\u4f0f", "\u672a\u7533\u7533-\u516b", "\u9149\u9149\u9149-\u72ec", "\u4ea5\u620c\u620c-\u516b", "\u4ea5\u536f\u672a-\u91cd"], "\u4e19\u620c": ["\u5b50\u672a\u5bc5-\u77e5", "\u9149\u5df3\u4e11-\u9065", "\u4ea5\u7533\u5df3-\u9065", "\u4e11\u4ea5\u9149-\u91cd", "\u536f\u5bc5\u4e11-\u5143", "\u5df3\u7533\u5bc5-\u4f0f", "\u4ea5\u5b50\u4e11-\u91cd", "\u5b50\u5bc5\u8fb0-\u91cd", "\u7533\u4ea5\u5bc5-\u91cd", "\u9149\u4e11\u5df3-\u91cd", "\u7533\u4e11\u5348-\u77e5", "\u5df3\u4ea5\u5df3-\u8fd4"], "\u4e59\u5df3": ["\u9149\u5df3\u4e11-\u9065", "\u4e11\u620c\u672a-\u91cd", "\u4e11\u4ea5\u9149-\u91cd", "\u536f\u5bc5\u4e11-\u5143", "\u8fb0\u5df3\u7533-\u4f0f", "\u672a\u7533\u9149-\u9065", "\u7533\u620c\u5b50-\u91cd", "\u672a\u620c\u4e11-\u6bd4", "\u9149\u4e11\u5df3-\u91cd", "\u5bc5\u672a\u5b50-\u91cd", "\u5df3\u4ea5\u5df3-\u8fd4", "\u5348\u4e11\u7533-\u91cd"], "\u8f9b\u4ea5": ["\u4e11\u536f\u5df3-\u6d89", "\u5df3\u7533\u4ea5-\u9065", "\u672a\u4ea5\u536f-\u6bd4", "\u536f\u7533\u4e11-\u91cd", "\u5df3\u4ea5\u5df3-\u8fd4", "\u5348\u4e11\u7533-\u91cd", "\u672a\u536f\u4ea5-\u6d89", "\u5df3\u5bc5\u4ea5-\u5143", "\u5348\u8fb0\u5bc5-\u5143", "\u620c\u9149\u7533-\u5143", "\u4ea5\u620c\u672a-\u4f0f", "\u4e11\u5bc5\u536f-\u5143"], "\u5e9a\u5348": ["\u8fb0\u7533\u5b50-\u6d89", "\u8fb0\u9149\u5bc5-\u77e5", "\u5bc5\u7533\u5bc5-\u8fd4", "\u620c\u5df3\u5b50-\u6bd4", "\u620c\u5b50\u5bc5-\u6d89", "\u5df3\u5bc5\u4ea5-\u5143", "\u5348\u8fb0\u5bc5-\u6d89", "\u5348\u5df3\u8fb0-\u9065", "\u7533\u5bc5\u5df3-\u4f0f", "\u620c\u672a\u9149-\u6634", "\u7533\u620c\u5b50-\u6d89", "\u9149\u5b50\u536f-\u91cd"], "\u7678\u9149": ["\u672a\u5348\u5df3-\u9065", "\u4e11\u620c\u672a-\u4f0f", "\u4ea5\u5b50\u4e11-\u91cd", "\u4e11\u536f\u5df3-\u5143", "\u8fb0\u672a\u620c-\u5143", "\u9149\u4e11\u5df3-\u6d89", "\u672a\u5b50\u5df3-\u6bd4", "\u536f\u9149\u536f-\u8fd4", "\u536f\u620c\u5df3-\u6d89", "\u5df3\u9149\u4e11-\u5143", "\u5348\u536f\u5b50-\u6d89", "\u672a\u5df3\u536f-\u9065"], "\u7532\u8fb0": ["\u620c\u7533\u5348-\u6d89", "\u5b50\u4ea5\u620c-\u6bd4", "\u5bc5\u5df3\u7533-\u4f0f", "\u8fb0\u5df3\u5348-\u91cd", "\u8fb0\u5348\u7533-\u6d89", "\u7533\u4ea5\u5bc5-\u91cd", "\u7533\u5b50\u8fb0-\u9065", "\u5bc5\u672a\u5b50-\u6d89", "\u5bc5\u7533\u5bc5-\u8fd4", "\u5348\u4e11\u7533-\u6bd4", "\u620c\u5348\u5bc5-\u6d89", "\u7533\u5df3\u5bc5-\u9065"], "\u58ec\u8fb0": ["\u4e11\u5bc5\u536f-\u5143", "\u7533\u620c\u5b50-\u91cd", "\u620c\u4e11\u8fb0-\u9065", "\u672a\u4ea5\u536f-\u91cd", "\u5bc5\u672a\u5b50-\u91cd", "\u5df3\u4ea5\u5df3-\u8fd4", "\u5348\u4e11\u7533-\u6bd4", "\u5b50\u7533\u8fb0-\u91cd", "\u5df3\u5bc5\u4ea5-\u5143", "\u5bc5\u5b50\u620c-\u5143", "\u620c\u9149\u7533-\u77e5", "\u4ea5\u8fb0\u620c-\u4f0f"], "\u7678\u4ea5": ["\u620c\u9149\u7533-\u5143", "\u4e11\u620c\u672a-\u4f0f", "\u4e11\u5bc5\u536f-\u5143", "\u4e11\u536f\u5df3-\u6d89", "\u8fb0\u672a\u620c-\u5143", "\u9149\u4e11\u5df3-\u6d89", "\u5348\u4ea5\u8fb0-\u91cd", "\u5df3\u4ea5\u5df3-\u8fd4", "\u536f\u620c\u5df3-\u6bd4", "\u672a\u536f\u4ea5-\u6d89", "\u5df3\u5bc5\u4ea5-\u77e5", "\u672a\u5df3\u536f-\u9065"], "\u58ec\u5bc5": ["\u8fb0\u5df3\u5348-\u91cd", "\u8fb0\u5348\u7533-\u91cd", "\u7533\u4ea5\u5bc5-\u91cd", "\u672a\u4ea5\u536f-\u91cd", "\u5b50\u5df3\u620c-\u6bd4", "\u5bc5\u7533\u5bc5-\u8fd4", "\u5348\u8fb0\u7533-\u91cd", "\u620c\u5348\u5bc5-\u91cd", "\u5df3\u5bc5\u4ea5-\u5143", "\u620c\u7533\u5348-\u5143", "\u5b50\u4ea5\u620c-\u6bd4", "\u4ea5\u5bc5\u5df3-\u4f0f"], "\u7532\u5bc5": ["\u620c\u7533\u5348-\u5143", "\u5b50\u4ea5\u620c-\u6bd4", "\u5bc5\u5df3\u7533-\u4f0f", "\u8fb0\u5df3\u5348-\u91cd", "\u8fb0\u5348\u7533-\u91cd", "\u7533\u4ea5\u5bc5-\u91cd", "\u7533\u5348\u5348-\u516b", "\u5b50\u5df3\u620c-\u6bd4", "\u5bc5\u7533\u5bc5-\u8fd4", "\u9149\u8fb0\u4ea5-\u5143", "\u620c\u5348\u5bc5-\u91cd", "\u4e11\u4ea5\u4ea5-\u516b"], "\u58ec\u5b50": ["\u5bc5\u536f\u8fb0-\u77e5", "\u8fb0\u5348\u7533-\u91cd", "\u5348\u9149\u5b50-\u9065", "\u672a\u4ea5\u536f-\u91cd", "\u5df3\u620c\u536f-\u91cd", "\u5348\u5b50\u5348-\u8fd4", "\u5348\u4e11\u7533-\u91cd", "\u672a\u536f\u4ea5-\u6d89", "\u5348\u536f\u5b50-\u77e5", "\u620c\u7533\u5348-\u5143", "\u620c\u9149\u7533-\u5143", "\u4ea5\u5b50\u536f-\u4f0f"], "\u5df1\u9149": ["\u672a\u5b50\u5df3-\u6d89", "\u536f\u9149\u536f-\u8fd4", "\u4ea5\u5348\u4e11-\u91cd", "\u5df3\u4e11\u9149-\u6d89", "\u5348\u536f\u5b50-\u5143", "\u536f\u4e11\u4ea5-\u9065", "\u620c\u5348\u7533-\u6634", "\u9149\u672a\u4e11-\u4f0f", "\u4ea5\u5b50\u4e11-\u91cd", "\u4e11\u536f\u5df3-\u5143", "\u536f\u5348\u9149-\u9065", "\u4ea5\u536f\u672a-\u91cd"], "\u620a\u620c": ["\u5b50\u672a\u5bc5-\u91cd", "\u5bc5\u620c\u5348-\u9065", "\u5bc5\u4ea5\u7533-\u5143", "\u4e11\u4ea5\u9149-\u91cd", "\u536f\u5bc5\u4e11-\u5143", "\u5df3\u7533\u5bc5-\u4f0f", "\u4ea5\u5b50\u4e11-\u91cd", "\u5b50\u5bc5\u8fb0-\u91cd", "\u5bc5\u4ea5\u5df3-\u9065", "\u5bc5\u5348\u620c-\u5143", "\u7533\u4e11\u5348-\u77e5", "\u5df3\u4ea5\u5df3-\u8fd4"], "\u620a\u5348": ["\u5b50\u672a\u5bc5-\u91cd", "\u620c\u5348\u5bc5-\u91cd", "\u5bc5\u4ea5\u7533-\u5143", "\u4e11\u4ea5\u9149-\u91cd", "\u536f\u5bc5\u4e11-\u5143", "\u5df3\u7533\u5bc5-\u4f0f", "\u5bc5\u5348\u5348-\u522b", "\u7533\u620c\u5b50-\u91cd", "\u9149\u5b50\u536f-\u91cd", "\u5bc5\u5348\u620c-\u5143", "\u8fb0\u9149\u5bc5-\u77e5", "\u5348\u5b50\u5348-\u8fd4"], "\u4e19\u5348": ["\u5b50\u672a\u5bc5-\u77e5", "\u620c\u5348\u5bc5-\u91cd", "\u5b50\u9149\u5348-\u9065", "\u4e11\u4ea5\u9149-\u91cd", "\u536f\u5bc5\u4e11-\u5143", "\u5df3\u7533\u5bc5-\u4f0f", "\u7533\u9149\u620c-\u9065", "\u7533\u620c\u5b50-\u91cd", "\u7533\u4ea5\u5bc5-\u6bd4", "\u9149\u4e11\u5df3-\u91cd", "\u8fb0\u9149\u5bc5-\u77e5", "\u5348\u5b50\u5348-\u8fd4"], "\u8f9b\u536f": ["\u5df3\u672a\u9149-\u9065", "\u9149\u5b50\u536f-\u91cd", "\u672a\u4ea5\u536f-\u6d89", "\u536f\u7533\u4e11-\u91cd", "\u536f\u9149\u536f-\u8fd4", "\u620c\u5df3\u5b50-\u91cd", "\u672a\u536f\u4ea5-\u77e5", "\u5b50\u672a\u5b50-\u6634", "\u4ea5\u9149\u672a-\u6d89", "\u4e11\u5b50\u4ea5-\u91cd", "\u536f\u5b50\u5348-\u4f0f", "\u8fb0\u5df3\u5348-\u91cd"], "\u58ec\u7533": ["\u4e11\u5bc5\u536f-\u5143", "\u5b50\u5bc5\u8fb0-\u91cd", "\u5df3\u7533\u4ea5-\u9065", "\u672a\u4ea5\u536f-\u91cd", "\u8fb0\u9149\u5bc5-\u5143", "\u5bc5\u7533\u5bc5-\u8fd4", "\u5348\u4e11\u7533-\u6d89", "\u5b50\u7533\u8fb0-\u91cd", "\u5df3\u5bc5\u4ea5-\u5143", "\u5348\u8fb0\u5bc5-\u9065", "\u620c\u9149\u7533-\u5143", "\u4ea5\u7533\u5bc5-\u4f0f"], "\u4e19\u7533": ["\u620c\u5df3\u5b50-\u6bd4", "\u5b50\u7533\u8fb0-\u91cd", "\u5df3\u5bc5\u4ea5-\u5143", "\u4e11\u4ea5\u9149-\u91cd", "\u536f\u5bc5\u4e11-\u5143", "\u5df3\u7533\u5bc5-\u4f0f", "\u9149\u620c\u4ea5-\u9065", "\u5b50\u5bc5\u8fb0-\u91cd", "\u7533\u4ea5\u5bc5-\u91cd", "\u9149\u4e11\u5df3-\u91cd", "\u536f\u7533\u4e11-\u5143", "\u5bc5\u7533\u5bc5-\u8fd4"], "\u8f9b\u5df3": ["\u5bc5\u8fb0\u5348-\u9065", "\u7533\u4ea5\u5bc5-\u91cd", "\u9149\u4e11\u5df3-\u6bd4", "\u536f\u7533\u4e11-\u91cd", "\u5df3\u4ea5\u5df3-\u8fd4", "\u672a\u5bc5\u9149-\u6d89", "\u5348\u5bc5\u620c-\u5143", "\u5bc5\u4ea5\u7533-\u9065", "\u4e11\u4ea5\u9149-\u91cd", "\u536f\u5bc5\u4e11-\u5143", "\u5df3\u7533\u5bc5-\u4f0f", "\u5348\u672a\u7533-\u9065"], "\u7678\u536f": ["\u4e11\u5b50\u4ea5-\u91cd", "\u4e11\u620c\u672a-\u4f0f", "\u8fb0\u5df3\u5348-\u91cd", "\u672a\u9149\u4ea5-\u9065", "\u9149\u5b50\u536f-\u91cd", "\u9149\u4e11\u5df3-\u6d89", "\u5348\u4ea5\u8fb0-\u91cd", "\u536f\u9149\u536f-\u8fd4", "\u536f\u620c\u5df3-\u6bd4", "\u672a\u536f\u4ea5-\u6d89", "\u620c\u672a\u8fb0-\u5143", "\u4e11\u4ea5\u9149-\u6d89"], "\u4e59\u4e11": ["\u5df3\u4e11\u9149-\u5143", "\u4e11\u620c\u672a-\u91cd", "\u4ea5\u9149\u672a-\u91cd", "\u5b50\u4ea5\u620c-\u91cd", "\u8fb0\u4e11\u620c-\u4f0f", "\u5bc5\u536f\u8fb0-\u5143", "\u7533\u620c\u5b50-\u91cd", "\u672a\u620c\u4e11-\u91cd", "\u9149\u4e11\u5df3-\u91cd", "\u5bc5\u672a\u5b50-\u91cd", "\u620c\u8fb0\u620c-\u8fd4", "\u536f\u620c\u5df3-\u6bd4"], "\u4e01\u536f": ["\u5df3\u620c\u536f-\u91cd", "\u536f\u4e11\u536f-\u8fd4", "\u620c\u5df3\u5b50-\u91cd", "\u672a\u536f\u4ea5-\u5143", "\u5b50\u9149\u5348-\u9065", "\u4ea5\u9149\u672a-\u6d89", "\u4e11\u5b50\u4ea5-\u91cd", "\u536f\u5b50\u5348-\u4f0f", "\u8fb0\u5df3\u5348-\u6d89", "\u9149\u4ea5\u4e11-\u91cd", "\u9149\u5b50\u536f-\u91cd", "\u672a\u4ea5\u536f-\u6d89"], "\u7532\u5b50": ["\u620c\u7533\u5348-\u5143", "\u5b50\u620c\u4ea5-\u6bd4", "\u5bc5\u5df3\u7533-\u4f0f", "\u8fb0\u5df3\u5348-\u91cd", "\u8fb0\u5348\u7533-\u91cd", "\u7533\u4ea5\u5bc5-\u91cd", "\u8fb0\u7533\u5b50-\u5143", "\u5b50\u5df3\u620c-\u6bd4", "\u5bc5\u7533\u5bc5-\u8fd4", "\u5bc5\u9149\u8fb0-\u77e5", "\u620c\u5348\u7533-\u91cd", "\u5348\u536f\u5b50-\u5143"], "\u4e19\u8fb0": ["\u5348\u4e11\u7533-\u6bd4", "\u5b50\u7533\u8fb0-\u91cd", "\u4ea5\u7533\u5df3-\u9065", "\u4e11\u4ea5\u9149-\u91cd", "\u536f\u5bc5\u4e11-\u5143", "\u5df3\u7533\u5bc5-\u4f0f", "\u4ea5\u5348\u5348-\u522b", "\u7533\u620c\u5b50-\u91cd", "\u7533\u4ea5\u5bc5-\u91cd", "\u9149\u4e11\u5df3-\u91cd", "\u5bc5\u672a\u5b50-\u91cd", "\u5df3\u4ea5\u5df3-\u8fd4"], "\u620a\u5bc5": ["\u5b50\u672a\u5bc5-\u91cd", "\u620c\u5348\u5bc5-\u91cd", "\u5bc5\u4ea5\u7533-\u5143", "\u4e11\u4ea5\u9149-\u91cd", "\u5b50\u4ea5\u620c-\u6bd4", "\u5df3\u7533\u5bc5-\u4f0f", "\u8fb0\u5df3\u5348-\u91cd", "\u8fb0\u5348\u7533-\u91cd", "\u7533\u4ea5\u5bc5-\u91cd", "\u4e11\u5348\u9149-\u6634", "\u5b50\u5df3\u620c-\u6bd4", "\u5bc5\u7533\u5bc5-\u8fd4"], "\u58ec\u5348": ["\u4e11\u5bc5\u536f-\u5143", "\u7533\u620c\u5b50-\u91cd", "\u9149\u5b50\u536f-\u91cd", "\u672a\u4ea5\u536f-\u91cd", "\u8fb0\u9149\u5bc5-\u77e5", "\u5348\u5b50\u5348-\u8fd4", "\u5348\u4e11\u7533-\u91cd", "\u620c\u5348\u5bc5-\u91cd", "\u5df3\u5bc5\u4ea5-\u5143", "\u5bc5\u5b50\u620c-\u5143", "\u620c\u9149\u7533-\u5143", "\u4ea5\u5348\u5b50-\u4f0f"], "\u5e9a\u5bc5": ["\u8fb0\u7533\u5b50-\u5143", "\u5b50\u5df3\u620c-\u6bd4", "\u5bc5\u7533\u5bc5-\u8fd4", "\u620c\u5df3\u5b50-\u6bd4", "\u620c\u5348\u5bc5-\u6d89", "\u5df3\u5bc5\u4ea5-\u5143", "\u5348\u8fb0\u5bc5-\u6d89", "\u5b50\u4ea5\u620c-\u6bd4", "\u7533\u5bc5\u5df3-\u4f0f", "\u8fb0\u5df3\u5348-\u91cd", "\u8fb0\u5348\u7533-\u6d89", "\u7533\u4ea5\u5bc5-\u91cd"], "\u7532\u5348": ["\u620c\u7533\u5b50-\u6d89", "\u5b50\u4ea5\u620c-\u6bd4", "\u5bc5\u5df3\u7533-\u4f0f", "\u8fb0\u5df3\u5348-\u91cd", "\u8fb0\u5348\u7533-\u6d89", "\u7533\u4ea5\u5bc5-\u6bd4", "\u5bc5\u5348\u620c-\u5143", "\u5b50\u5df3\u620c-\u6bd4", "\u5bc5\u7533\u5bc5-\u8fd4", "\u9149\u8fb0\u4ea5-\u5143", "\u620c\u5348\u7533-\u91cd", "\u7533\u5df3\u5bc5-\u9065"], "\u5df1\u4ea5": ["\u5df3\u620c\u536f-\u6bd4", "\u5df3\u4ea5\u5df3-\u8fd4", "\u5348\u4e11\u7533-\u91cd", "\u672a\u536f\u4ea5-\u6d89", "\u5df3\u5bc5\u4ea5-\u5143", "\u536f\u4e11\u4ea5-\u9065", "\u620c\u9149\u7533-\u5143", "\u4ea5\u672a\u4e11-\u4f0f", "\u4e11\u5bc5\u536f-\u5143", "\u4e11\u536f\u5df3-\u6d89", "\u5bc5\u5df3\u7533-\u9065", "\u672a\u4ea5\u536f-\u6d89"], "\u5e9a\u7533": ["\u8fb0\u7533\u5b50-\u5143", "\u536f\u4e11\u4e11-\u516b", "\u5bc5\u7533\u5bc5-\u8fd4", "\u620c\u5df3\u5b50-\u6bd4", "\u5b50\u7533\u8fb0-\u91cd", "\u5df3\u5bc5\u4ea5-\u5143", "\u5348\u8fb0\u5bc5-\u5143", "\u9149\u672a\u672a-\u516b", "\u7533\u5bc5\u5df3-\u4f0f", "\u4ea5\u9149\u9149-\u516b", "\u5b50\u5bc5\u8fb0-\u91cd", "\u4e11\u4ea5\u4ea5-\u516b"], "\ufeff\u5e72\u652f": ["\u5e72\u4e0a\u5b50", "\u5e72\u4e0a\u4e11", "\u5e72\u4e0a\u5bc5", "\u5e72\u4e0a\u536f", "\u5e72\u4e0a\u8fb0", "\u5e72\u4e0a\u5df3", "\u5e72\u4e0a\u5348", "\u5e72\u4e0a\u672a", "\u5e72\u4e0a\u7533", "\u5e72\u4e0a\u9149", "\u5e72\u4e0a\u620c", "\u5e72\u4e0a\u4ea5"], "\u7678\u672a": ["\u5df3\u8fb0\u536f-\u9065", "\u4e11\u620c\u672a-\u4f0f", "\u7533\u5bc5\u7533-\u6634", "\u5df3\u672a\u9149-\u9065", "\u8fb0\u672a\u620c-\u5143", "\u9149\u4e11\u5df3-\u6d89", "\u5df3\u620c\u536f-\u77e5", "\u672a\u4e11\u672a-\u8fd4", "\u536f\u620c\u5df3-\u91cd", "\u536f\u4ea5\u672a-\u6d89", "\u620c\u672a\u8fb0-\u5143", "\u5df3\u536f\u4e11-\u9065"], "\u7532\u620c": ["\u5348\u8fb0\u7533-\u6d89", "\u5b50\u4ea5\u620c-\u6bd4", "\u5bc5\u5df3\u7533-\u4f0f", "\u8fb0\u5df3\u5348-\u6bd4", "\u8fb0\u5348\u7533-\u6d89", "\u7533\u4ea5\u5bc5-\u91cd", "\u5bc5\u5348\u620c-\u5143", "\u5b50\u5df3\u620c-\u6bd4", "\u5bc5\u7533\u5bc5-\u8fd4", "\u5b50\u672a\u5bc5-\u77e5", "\u5bc5\u5348\u620c-\u91cd", "\u5df3\u7533\u5bc5-\u9065"], "\u4e59\u536f": ["\u672a\u536f\u4ea5-\u5143", "\u4e11\u620c\u672a-\u91cd", "\u4ea5\u9149\u672a-\u6d89", "\u4e11\u5b50\u4ea5-\u91cd", "\u8fb0\u536f\u5b50-\u4f0f", "\u8fb0\u5df3\u5348-\u91cd", "\u7533\u620c\u5b50-\u91cd", "\u9149\u5b50\u536f-\u6d89", "\u672a\u4ea5\u536f-\u6d89", "\u5bc5\u672a\u5b50-\u91cd", "\u536f\u9149\u536f-\u8fd4", "\u5348\u4e11\u7533-\u6d89"], "\u4e59\u9149": ["\u5df3\u4e11\u9149-\u5143", "\u4e11\u620c\u672a-\u91cd", "\u672a\u5df3\u536f-\u9065", "\u7533\u672a\u5348-\u9065", "\u8fb0\u9149\u536f-\u4f0f", "\u4ea5\u5b50\u4e11-\u91cd", "\u7533\u620c\u5b50-\u91cd", "\u672a\u620c\u4e11-\u91cd", "\u7533\u5b50\u8fb0-\u5143", "\u672a\u5b50\u5df3-\u6bd4", "\u536f\u9149\u536f-\u8fd4", "\u4ea5\u5348\u4e11-\u6bd4"], "\u620a\u5b50": ["\u5b50\u672a\u5bc5-\u91cd", "\u5df3\u7533\u4e11-\u6634", "\u5bc5\u4ea5\u7533-\u6d89", "\u4e11\u4ea5\u9149-\u91cd", "\u620c\u9149\u7533-\u77e5", "\u5df3\u7533\u5bc5-\u4f0f", "\u5bc5\u536f\u8fb0-\u77e5", "\u8fb0\u5348\u7533-\u91cd", "\u536f\u5348\u9149-\u9065", "\u8fb0\u7533\u5b50-\u5143", "\u5df3\u620c\u536f-\u91cd", "\u5348\u5b50\u5348-\u8fd4"], "\u8f9b\u9149": ["\u4e11\u536f\u5df3-\u5143", "\u536f\u5348\u9149-\u9065", "\u5bc5\u5348\u620c-\u91cd", "\u672a\u5b50\u5df3-\u6d89", "\u536f\u9149\u536f-\u8fd4", "\u4ea5\u5348\u4e11-\u91cd", "\u5df3\u4e11\u9149-\u77e5", "\u5348\u536f\u5b50-\u5143", "\u5348\u8fb0\u5bc5-\u5143", "\u4e11\u9149\u9149-\u522b", "\u9149\u620c\u672a-\u4f0f", "\u4ea5\u5b50\u4e11-\u91cd"], "\u4e01\u5df3": ["\u5df3\u620c\u536f-\u91cd", "\u5df3\u4ea5\u5df3-\u8fd4", "\u9149\u8fb0\u4ea5-\u6d89", "\u4ea5\u536f\u672a-\u9065", "\u4ea5\u7533\u5df3-\u9065", "\u4e11\u4ea5\u9149-\u91cd", "\u536f\u5bc5\u4e11-\u5143", "\u5df3\u7533\u5bc5-\u4f0f", "\u7533\u9149\u620c-\u91cd", "\u9149\u4ea5\u4e11-\u91cd", "\u7533\u4ea5\u5bc5-\u91cd", "\u9149\u4e11\u5df3-\u91cd"], "\u5e9a\u8fb0": ["\u8fb0\u7533\u5b50-\u5143", "\u5bc5\u672a\u5b50-\u9065", "\u5bc5\u7533\u5bc5-\u8fd4", "\u5348\u4e11\u7533-\u6d89", "\u5b50\u7533\u8fb0-\u91cd", "\u5df3\u5bc5\u4ea5-\u5143", "\u5bc5\u5b50\u620c-\u6d89", "\u536f\u5bc5\u4e11-\u5143", "\u7533\u5bc5\u5df3-\u4f0f", "\u5348\u672a\u7533-\u9065", "\u7533\u620c\u5b50-\u6d89", "\u5bc5\u5df3\u7533-\u9065"], "\u7678\u5df3": ["\u536f\u5bc5\u4e11-\u5143", "\u4e11\u620c\u672a-\u4f0f", "\u672a\u7533\u9149-\u9065", "\u672a\u9149\u4ea5-\u9065", "\u7533\u4ea5\u5bc5-\u91cd", "\u9149\u4e11\u5df3-\u6d89", "\u5348\u4ea5\u8fb0-\u91cd", "\u5df3\u4ea5\u5df3-\u8fd4", "\u536f\u620c\u5df3-\u91cd", "\u5df3\u4e11\u9149-\u5143", "\u620c\u672a\u8fb0-\u5143", "\u4e11\u4ea5\u9149-\u91cd"], "\u620a\u7533": ["\u5b50\u672a\u5bc5-\u6d89", "\u5b50\u7533\u8fb0-\u91cd", "\u5bc5\u4ea5\u7533-\u77e5", "\u4e11\u4ea5\u9149-\u91cd", "\u536f\u5bc5\u4e11-\u5143", "\u5df3\u7533\u5bc5-\u4f0f", "\u620c\u9149\u5348-\u6634", "\u5b50\u5bc5\u8fb0-\u91cd", "\u5bc5\u5df3\u7533-\u9065", "\u8fb0\u7533\u5b50-\u5143", "\u536f\u7533\u4e11-\u5143", "\u5bc5\u7533\u5bc5-\u8fd4"]};
		return t720[day][i];
	}
	
	init()
	{

		Gstr={
			gongli:"",
			nongli:"",
			jieqi:"",
			siZhu:[],
			yueJiang:"",
			tianPan:[],
			siKe:[],
			
			siKeWuXing:[],
			siKeShengKe:[],
			siKeYinYang:[],
			siKeTianJiang:[],
			
			sanChuan:[],
			sanChuanDunGan:[],
			sanChuanTianJiang:[],
			
			dunGan:[],
			tianJiang:[],
			liuQin:[]
		};
		jq = new Array("??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????",   "??????", "??????", "??????", "??????", "??????", "??????");
		jdez = new Array(30);
		jdjq = new Array(26);
		jq0 = new Array("??????", "??????", "??????","??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????",   "??????", "??????", "??????" );
	}
	
	date_to_julian_day(y,m,d) {

		var a = parseInt((14 - m) / 12);
		var y = y + 4800 - a;
		var m = m + 12*a - 3;
		return d + parseInt((153*m + 2)/5) + 365*y + parseInt(y/4) - parseInt(y/100) + parseInt(y/400) - 32045;
	}
	
  date_to_julian_day2(yr,mh,dy) {
		var hr = 0;
		var op = false;
		if(yr<-400000 || yr>400000) return false;
		var yp=yr+Math.floor((mh-3)/10);
		if(((yr>1582) || (yr==1582 && mh>10) || (yr==1582 && mh==10 && dy>=15)) || op){
			var init=1721119.5;
			var jdy=Math.floor(yp*365.25)-Math.floor(yp/100)+Math.floor(yp/400);
		}
		else{
			if((yr<1582) || (yr==1582 && mh<10) || (yr==1582 && mh==10 && dy<=4)){
			var init=1721117.5;
			var jdy=Math.floor(yp*365.25);
			}
			else {return false;}
		}
		var mp=Math.floor(mh+9)%12; 
		var jdm=mp*30+Math.floor((mp+1)*34/57);
		var jdd=dy-1;
		var jdh=hr/24;
		var jd=jdy+jdm+jdd+jdh+init;
		return jd;
	}
	
	MeanJQJD(yy,jdve,ty,ini,num){
    var ath=2*Math.PI/24;
    var tx=(jdve-2451545)/365250;
    var e=0.0167086342-0.0004203654*tx-0.0000126734*tx*tx+0.0000001444*tx*tx*tx-0.0000000002*tx*tx*tx*tx+0.0000000003*tx*tx*tx*tx*tx;
    var tt=yy/1000;
    var vp=111.25586939-17.0119934518333*tt-0.044091890166673*tt*tt-4.37356166661345E-04*tt*tt*tt+8.16716666602386E-06*tt*tt*tt*tt;
    var rvp=vp*2*Math.PI/360;
    var peri = new Array(30);
    var i;
    for(i=1;i<=(ini+num);i++){
      var flag=0;
      var th=ath*(i-1)+rvp;
      if(th>Math.PI && th<=3*Math.PI){
        th=2*Math.PI-th;
        flag=1;
      }
      if(th>3*Math.PI){
        th=4*Math.PI-th;
        flag=2;
      }
      var f1=2*Math.atan((Math.sqrt((1-e)/(1+e))*Math.tan(th/2)));
      var f2=(e*Math.sqrt(1-e*e)*Math.sin(th))/(1+e*Math.cos(th));
      var f=(f1-f2)*ty/2/Math.PI;
      if(flag==1) f=ty-f;
      if(flag==2) f=2*ty-f;
      peri[i]=f;
    }
    for(i=ini;i<=(ini+num);i++){
    	jdez[i]=jdve+peri[i]-peri[1];
    }
    return true;
  };
   /*****
   * ???????????????????????????????????????
   * 
   */
  DeltaT(yy , mm ){
    var u, t, dt, y;
    y = yy + (mm - 0.5) / 12;

    if(y<=-500){	
      u = (y - 1820) / 100;
      dt = (-20 + 32*u*u);}
    else{if(y< 500){
      u = y / 100;
      dt=(10583.6-1014.41*u+33.78311*u*u-5.952053*u*u*u-0.1798452*u*u*u*u+0.022174192*u*u*u*u*u+0.0090316521*u*u*u*u*u*u);}
    else{if(y<1600){
      u = (y - 1000) / 100;
      dt = (1574.2-556.01*u+71.23472*u*u+0.319781*u*u*u-0.8503463*u*u*u*u-0.005050998*u*u*u*u*u+ 0.0083572073*u*u*u*u*u*u);}
    else{if(y<1700){
      t = y - 1600;
      dt = (120 - 0.9808 * t - 0.01532 * t*t + t*t*t / 7129);}
    else{if(y<1800){
      t = y - 1700;
      dt = (8.83 + 0.1603 * t - 0.0059285 * t*t + 0.00013336 * t*t*t - t*t*t*t / 1174000);}
    else{if(y<1860){
      t = y - 1800;
      dt=(13.72-0.332447*t+0.0068612*t*t+0.0041116*t*t*t-0.00037436*t*t*t*t+0.0000121272*t*t*t*t*t-0.0000001699*t*t*t*t*t*t+ 0.000000000875*t*t*t*t*t*t*t);}
    else{if(y<1900){
      t = y - 1860;
      dt = (7.62 + 0.5737 * t - 0.251754 * t*t + 0.01680668 * t*t*t - 0.0004473624 * t*t*t*t + t*t*t*t*t / 233174);}
    else{if(y<1920){
      t = y - 1900;
      dt = (-2.79 + 1.494119 * t - 0.0598939 * t*t + 0.0061966 * t*t*t - 0.000197 * t*t*t*t);}
    else{if(y<1941){
      t = y - 1920;
      dt = (21.2 + 0.84493 * t - 0.0761 * t*t + 0.0020936 * t*t*t);}
    else{if(y<1961){
      t = y - 1950;
      dt = (29.07 + 0.407 * t - t*t / 233 + t*t*t / 2547);}
    else{if(y<1986){
      t = y - 1975;
      dt = (45.45 + 1.067 * t - t*t / 260 - t*t*t / 718);}
    else{if(y<2005){
      t = y - 2000;
      dt = (63.86 + 0.3345 * t - 0.060374 * t*t + 0.0017275 * t*t*t + 0.000651814 * t*t*t*t + 0.00002373599 * t*t*t*t*t);}
    else{if(y<2050){
      t = y - 2000;
      dt = (62.92 + 0.32217 * t + 0.005589 * t*t);}
    else{if(y<2150){
      u = (y - 1820) / 100;
      dt = (-20 + 32*u*u-0.5628*(2150 - y));}
    else{
      u = (y - 1820) / 100;
      dt = (-20 + 32*u*u);}}}}}}}}}}}}}}

    if(y<1955 || y>=2005) dt=dt-(0.000012932*(y-1955)*(y-1955));
    var DeltaT = dt / 60;    //??????????????????
    return DeltaT;
  }
  date_to_julian_time(h,i,s) {
		return ((h * 3600) + (i * 60) + s) /86400;
	}

	VE (yy) {
    var yx=yy;
    var jdve = 0;
    if(yx>=1000 && yx<=8001){
      var m=(yx-2000)/1000;
      jdve=2451623.80984+365242.37404*m+0.05169*m*m-0.00411*m*m*m-0.00057*m*m*m*m;
    }
    else{
      if(yx>=-8000 && yx<1000){
        m=yx/1000;
        jdve=1721139.29189+365242.1374*m+0.06134*m*m+0.00111*m*m*m-0.00071*m*m*m*m;
      }
    }
    return jdve;
  };

	  /*****
   * ???????????????????????????????????????????????????
   * ?????????perturbation??????????????????
   */
  Perturbation(jdez){
    var t=(jdez-2451545)/36525;
    var s=0;
    var ptsa = new Array(485, 203, 199, 182, 156, 136, 77, 74, 70, 58, 52, 50, 45, 44, 29, 18, 17, 16, 14, 12, 12, 12, 9, 8);
    var ptsb = new Array(324.96, 337.23, 342.08, 27.85, 73.14, 171.52, 222.54, 296.72, 243.58, 119.81, 297.17, 21.02, 247.54, 325.15, 60.93, 155.12, 288.79, 198.04, 199.76, 95.39, 287.11, 320.81, 227.73, 15.45);
    var ptsc = new Array(1934.136, 32964.467, 20.186, 445267.112, 45036.886, 22518.443, 65928.934, 3034.906, 9037.513, 33718.147, 150.678, 2281.226, 29929.562, 31555.956, 4443.417, 67555.328, 4562.452, 62894.029, 31436.921, 14577.848, 31931.756, 34777.259, 1222.114, 16859.074);
    for(var k=0;k<=23;k++){
      //s=s+this.ptsa[k]*Math.cos(this.ptsb[k]*2*Math.PI/360+this.ptsc[k]*2*Math.PI/360*t);
      s=s+ptsa[k]*Math.cos(ptsb[k]*2*Math.PI/360+ptsc[k]*2*Math.PI/360*t);
    }
    var w=35999.373*t-2.47;
    var l=1+0.0334*Math.cos(w*2*Math.PI/360)+0.0007*Math.cos(2*w*2*Math.PI/360);
    var ptb=0.00001*s/l;
    return ptb;
  };
	JiQi() {
  /**
   * ???????????????
   */

  /**
   * ?????????
   */
  
  /***
  this.ptsa = new Array(485, 203, 199, 182, 156, 136, 77, 74, 70, 58, 52, 50, 45, 44, 29, 18, 17, 16, 14, 12, 12, 12, 9, 8);
  this.ptsb = new Array(324.96, 337.23, 342.08, 27.85, 73.14, 171.52, 222.54, 296.72, 243.58, 119.81, 297.17, 21.02, 247.54, 325.15, 60.93, 155.12, 288.79, 198.04, 199.76, 95.39, 287.11, 320.81, 227.73, 15.45);
  this.ptsc = new Array(1934.136, 32964.467, 20.186, 445267.112, 45036.886, 22518.443, 65928.934, 3034.906, 9037.513, 33718.147, 150.678, 2281.226, 29929.562, 31555.956, 4443.417, 67555.328, 4562.452, 62894.029, 31436.921, 14577.848, 31931.756, 34777.259, 1222.114, 16859.074);
  ***/


  
  
}

//?????????????????????Perturbaton????????????????????????????????????24??????,???????????????
GetAdjustedJQ(yy, ini, num, jdjq){
	var veb=this.VE(yy);
	var ty=this.VE(yy+1)-veb;     //???????????????????????????????????????
	if(this.MeanJQJD(yy,veb,ty,ini,num)==true){	//???????????????,JD,????????????,??????????????????????????????
		for(var i=ini+1;i<=(ini+num);i++){
			var ptb=this.Perturbation(jdez[i]);	//?????????perturbation??????????????????
			var dt=this.DeltaT(yy,Math.floor(i/2)+3);	//??????dynamical time to Universal time
			jdjq[i]=jdez[i]+ptb-dt/60/24;	//?????????????????????ptb??????????????????Delta T???(??????????????????)
			jdjq[i]=jdjq[i]+1/3;	//??????????????????????????????????????????8????????????1/3???
		}
	}
}
/*****
 * ?????????????????????????????????????????????????????????12??????
 */
GetPureJQsinceSpring2(yy, ptsa,ptsb,ptsc, jdpjq){
	var sjdjq=new Array;
	var yea = yy - 1;
	this.GetAdjustedJQ(yea, 21, 3, sjdjq);   //?????????????????????????????????3?????????JD???,???????????????????????????
	//?????????????????????????????????????????????jdpjq?????????????????????index
	jdpjq[0] =sjdjq[22];                     //????????????
	jdpjq[1] =sjdjq[23];                     //????????????
	jdpjq[2] =sjdjq[24];                     //????????????
	yea = yy;
	//GetAdjustedJQ(yea, 0, 26, sjdjq);       //????????????????????????JD???,???????????????????????????
	this.GetAdjustedJQ(yea, 0, 26, sjdjq);       //????????????????????????JD???,???????????????????????????
	//jdpjq[3] =sjdjq[25];                     //??????????????????
	//?????????????????????????????????jdpjq?????????????????????index
	//jdpjq[3] =sjdjq[0]; 
	for(var i=2;i<=24;i++){
		//jdpjq[i+1] = sjdjq[2 * i];
		jdpjq[i+1] = sjdjq[i-1];
	}
};
/*****
 * ????????????????????????????????????
 */
Jtime(op,jd){
	if(jd>=2299160.5 || op){
		var y4h=146097;
		var init=1721119.5;
	}
	else{
		var y4h=146100;
		var init=1721117.5;
	}
	var jdr=Math.floor(jd-init);
	var yh=y4h/4;
	var cen=Math.floor((jdr+0.75)/yh);
	var d=Math.floor(jdr+0.75-cen*yh);
	var ywl=1461/4;
	var jy=Math.floor((d+0.75)/ywl);
	d=Math.floor(d+0.75-ywl*jy+1);
	var ml=153/5;
	var mp=Math.floor((d-0.5)/ml);
	d=Math.floor((d-0.5)-30.6*mp+1);
	var y=(100*cen)+jy;
	var m=(mp+2)%12+1;
	if(m<3) y=y+1;
	var sd=Math.floor((jd+0.5-Math.floor(jd+0.5))*24*60*60+0.00005);
	var mt=Math.floor(sd/60);
	var ss=sd%60;
	var hh=Math.floor(mt/60);
	var mmt=mt%60;
	var yy=Math.floor(y);
	var mm=Math.floor(m);
	var dd=Math.floor(d);
	var yc="     "+yy;
	yc=yc.substr(yc.length-5,5);
	var dytm=yc;dytm+="???";
	dytm+= ((mm < 10) ? "0" : "") + mm+"???";
	dytm+= ((dd < 10) ? "0" : "") + dd+"???";
	dytm+= ((hh < 10) ? "0" : "") + hh+"???";
	dytm+= ((mmt < 10) ? "0" : "") + mmt+"???";
	dytm+= ((ss < 10) ? "0" : "") + ss+"???";
	return dytm.trim();
};
/**
 * ????????????, ????????????
 */
GetGZ(y,m,d,h,i,s) {
	var jtoday = this.date_to_julian_day2(y,m,d) + this.date_to_julian_time(h,i,s);
	var jqTime=new Array;
	//var y = this.Jtime(jtoday);
	this.GetPureJQsinceSpring2(y,0,0,0,jqTime);  // ??????????????????(????????????????????????)
	if(jtoday < jqTime[0]) {
		y = y - 1;
		this.GetPureJQsinceSpring2(y,0,0,0,jqTime);  // ?????????????????????(????????????????????????)
		console.log("?????????????????????(????????????????????????)");
	}
	// ????????????
	var tin = "??????????????????????????????????????????????????????????????????";
	var di  = "????????????????????????????????????";
	
	var rtn_gz = new Array;    
	// ?????????
	var ygz = ((y + 4712 + 24) % 60 + 60) % 60;
	rtn_gz.push(tin[ygz % 10]);
	rtn_gz.push(di[ygz % 12]);
	// ?????????
	var dgz = -1;
	for(var ii = 24; ii > 0; ii--) {
		if(jtoday > jqTime[ii-1]) {
			dgz = ii;
			break;
		}
	}
	if(dgz < 0) dgz = 1;if(dgz%2 == 0) dgz--;
	dgz = Math.floor(dgz / 2);if(dgz == 12) dgz = 11;
	rtn_gz.push(tin.substr(Math.floor((ygz%10)%5*2+2),12)[dgz]);  // ??????
	rtn_gz.push("????????????????????????????????????".charAt(dgz));            // ??????
	// ?????????
	var jda = jtoday + 0.5;
	var thes = ((jda - Math.floor(jda)) * 86400) + 3600;
	var dayjd = Math.floor(jda) + thes / 86400;
	dgz = (Math.floor(dayjd + 49) % 60 + 60) % 60;
	if(h >= 23) dgz--; // ??????????????????, ?????????
	rtn_gz.push(tin[dgz % 10]); // ??????
	rtn_gz.push(di[dgz % 12]);  // ??????
	// ?????????
	var dh = dayjd * 12;
	//var hgz = (Math.floor(dh + 48) % 60 + 60) % 60;console.log('hgz',(Math.floor(dh + 48) % 60));
	var hgz = (Math.floor(dh + 48) % 60 + 60) % 60;
	//console.log(h,Math.ceil(h/2)%12,di[(h/2)%12],di[hgz % 12]);
	//if((h%2) == 1 && i == 0) hgz += 1;
	if((Math.ceil(h/2)%12) != (hgz%12)) hgz++;
	rtn_gz.push(tin[hgz % 10]); // ??????
	rtn_gz.push(di[hgz % 12]);  // ??????
	return rtn_gz.join("");
};
  
	 LuiYin(y,m,d,h,i,s,helpman_mode)
	 {

	var _output = new Object;
	//var d = new Date(); //??????
	//
	//var jiqi = new JiQi();
	//var jtoday = date_to_julian_day2(d.getFullYear(),d.getMonth()+1,d.getDate()) + 
	//  date_to_julian_time(d.getHours(), d.getMinutes(), d.getSeconds());
	var jtoday = this.date_to_julian_day2(y,m,d) + this.date_to_julian_time(h,i,s);
	
	var jqTime = new Array;
	this.GetPureJQsinceSpring2(y,0,0,0,jqTime);  // ??????????????????(????????????????????????)
	if(jtoday < jqTime[0]) {
	  this.GetPureJQsinceSpring2(y-1,0,0,0,jqTime);  // ?????????????????????(????????????????????????)
	}
	console.log("<pre>");
	var jqpos = 0;  // ??????????????????
	for(var ii = 1; ii < 25; ii++) {
	  if(jtoday < jqTime[ii]) {
		console.log(d, "\t",this.Jtime(false,jtoday));
		console.log(this.Jtime(false,jtoday));
		console.log("????????????: ",jq0[ii-1]);
		console.log(this.Jtime(false,jqTime[ii-1]));
		Gstr.gongli = this.Jtime(false,jtoday)
		Gstr.jieqi = "????????????: "+jq0[ii-1]
		Gstr.nongli = this.Jtime(false,jqTime[ii-1]);
		jqpos = ii - 1;
		break;
	  }
	}
	// ?????????
	//var fcol = jiqi.GetGZ(d.getFullYear(),d.getMonth()+1,d.getDate(),d.getHours(), d.getMinutes(), d.getSeconds());
	var fcol = this.GetGZ(y,m,d,h,i,s);
	
	// ?????????
	var tcol0 = new Array;
	var dcol0 = new Array;
	for(var i = 6; i > -1 ; i -= 2) tcol0.push(fcol[i]);
	for(var i = 7; i > -1 ; i -= 2) dcol0.push(fcol[i]);
	console.log("fcol",fcol)
	for(var i=0;i<4;i++)
	{
		Gstr.siZhu[i*2] = fcol[i*2]
	}
	for(var i=1;i<8;i=i+2)
	{
		Gstr.siZhu[i] = fcol[i]
	}
	// ???????????????
	var _arrGen = new Array;
	for(var i = 2; i < 25; i+=2) {
	  _arrGen.push(jqTime[i-1]);
	}
	var _gen = 0;
	
	for(var i = 0; i < 12; i++) {
	  ////console.log(jiqi.jq0[(11-i)*2+1]);
	  if(jtoday > _arrGen[11 - i]) {
		_gen = 11 - i;
		break;
	  }
	}
	Gstr.yueJiang = "????????????????????????????????????".charAt(_gen),"\r\n";
	// ????????????
	var _ginmon = "????????????????????????????????????".indexOf("????????????????????????????????????".charAt(_gen));  // ?????????index
	var _gmonth = "????????????????????????????????????".indexOf(dcol0[0]); //????????????index
	var _gg = _ginmon - _gmonth;
	if(_gg < 0) _gg+= 12;
	var gnm = "????????????????????????????????????????????????????????????????????????".substr(_gg,12); // ??????????????????
	
	var _gen_text = "????????????????????????????????????".charAt(_gen);
	var _dnt = gnm.indexOf(_gen_text);
	var day_night_tin = "????????????????????????????????????";
	var day_night_tin = day_night_tin.indexOf("????????????????????????????????????".charAt(_dnt));
	var tin_idx  = "??????????????????????????????".indexOf(tcol0[1]);
	var help_man;
	if(helpman_mode == 1) {
	  // ???????????????
	  help_man = "??????????????????????????????".charAt(tin_idx);
	} else if(helpman_mode == 0) {
	  // ???????????????
	  help_man = "??????????????????????????????".charAt(tin_idx);
	} else {
	  // ?????????????????????
	  if(day_night_tin < 6) { // ?????????
		help_man = "??????????????????????????????".charAt(tin_idx);
	  } else { //?????????
		help_man = "??????????????????????????????".charAt(tin_idx);
	  }
	}

	var help_man2;
	var _tmp  = gnm.indexOf(help_man); //console.log(gnm.charAt(_tmp));
	var _tmp2 = "????????????????????????????????????".charAt(_tmp);
	var day_night_dei = "????????????????????????????????????".indexOf(_tmp2);//console.log(_tmp2,":",day_night_dei);
	var _start_at = 12 - _tmp; if(_start_at == 0) _start_at = 12;
	//console.log(day_night_dei,': ',_start_at);
	if(day_night_dei < 6) { // ?????????
	  var help_man2 = "????????????????????????????????????????????????????????????????????????????????????????????????????????????".substr(_start_at, 12);
	} else { //?????????
	  var help_man2 = "????????????????????????????????????????????????????????????????????????????????????????????????????????????".substr(_start_at-1, 12);
	}
	// ?????????
	var _tin_gan_idx = "??????????????????????????????".indexOf(tcol0[1]);
	var _dei_chi_idx = "????????????????????????????????????".indexOf(dcol0[1]);
	var _chun_sau = _tin_gan_idx - _dei_chi_idx;
	if(_chun_sau < 0) _chun_sau += 12;
	_chun_sau = "??? ??? ??? ??? ??? ???".charAt(_chun_sau);
	var _tin_gan = "????????????????????????????????????????????????????????????????????????".substr(12 - gnm.indexOf(_chun_sau),12);
	//
	_output.helpMan   = help_man2;
	_output.genOnTime = gnm;
	// 

	Gstr.tianPan = gnm

	console.log("?????????",help_man2,"\r\n");
	console.log("?????????",_tin_gan,"\r\n");
	console.log("?????????",gnm,"\r\n");
	console.log("?????????",gnm,"\r\n")
	console.log("?????????","????????????????????????????????????","\r\n");
	console.log("\r\n");
	// ?????????
	var _tin_gan_elem = "??????????????????????????????".charAt("??????????????????????????????".indexOf(tcol0[1]));
	var _dei_zhi_5elem = "????????????????????????????????????";
	var _5elem_relation = "???????????????";
	var _5elem = "??????????????????????????????";_5elem = _5elem.substr(_5elem.indexOf(_tin_gan_elem),5);
	//?????????
	var _di4 = "??????????????????????????????".indexOf(tcol0[1]);
	var _out0 = new Array;
	var _out1 = new Array;
	_out0.push(tcol0[1]);
	var _tmp = "??????????????????????????????".charAt(_di4);
	_out1.push(gnm.charAt("????????????????????????????????????".indexOf(_tmp)));
	_out0.unshift(_out1[0]);
	_out1.unshift(gnm.charAt("????????????????????????????????????".indexOf(_out0[0])));
	_out0.unshift(dcol0[1]);
	_out1.unshift(gnm.charAt("????????????????????????????????????".indexOf(_out0[0])));
	_out0.unshift(_out1[0]);
	_out1.unshift(gnm.charAt("????????????????????????????????????".indexOf(_out0[0])));
	console.log("?????????","\r\n");
	
	
	//?????????
	var _three = this.luiyin_720(fcol.substr(4,2),"????????????????????????????????????".indexOf(_out1[3]));
	console.log("_three",_three)
	/** ???????????? **/
	for(var i = 0; i < 3; i++) {
		Gstr.liuQin.push(_5elem_relation.charAt(_5elem.indexOf(_dei_zhi_5elem.charAt("????????????????????????????????????".indexOf(_three[i])))))
		Gstr.sanChuanDunGan.push(_tin_gan.charAt(gnm.indexOf(_three[i])))
		Gstr.sanChuan.push(_three[i])
		Gstr.sanChuanTianJiang.push(help_man2.charAt(gnm.indexOf(_three[i])))
	}
	/** ???????????? **/
	Gstr.siKeTianJiang.push(help_man2.charAt(gnm.indexOf(_out1[3])))
	Gstr.siKeTianJiang.push(help_man2.charAt(gnm.indexOf(_out1[2])))
	Gstr.siKeTianJiang.push(help_man2.charAt(gnm.indexOf(_out1[1])))
	Gstr.siKeTianJiang.push(help_man2.charAt(gnm.indexOf(_out1[0])))
	Gstr.siKe.push(_out0[3])
	Gstr.siKe.push(_out1[3])
	Gstr.siKe.push(_out0[2])
	Gstr.siKe.push(_out1[2])
	Gstr.siKe.push(_out0[1])
	Gstr.siKe.push(_out1[1])
	Gstr.siKe.push(_out0[0])
	Gstr.siKe.push(_out1[0])
	/** ??????????????? **/
	for(var i=0;i<4;i++)
	{
		Gstr.tianPan[5+i]= gnm[5+i]
		Gstr.tianJiang[5+i]= help_man2[5+i]
	}
	Gstr.tianPan[4]= gnm[4]
	Gstr.tianJiang[4]= help_man2[4]
	Gstr.tianPan[9]= gnm[9]
	Gstr.tianJiang[9]= help_man2[9]
	Gstr.tianPan[3]= gnm[3]
	Gstr.tianJiang[3]= help_man2[3]
	Gstr.tianPan[10]= gnm[10]
	Gstr.tianJiang[10]= help_man2[10]
	for(var i=0;i<3;i++)
	{
		Gstr.tianPan[2-i]= gnm[2-i]
		Gstr.tianJiang[2-i]= help_man2[2-i]
	}
	Gstr.tianPan[11]= gnm[11]
	Gstr.tianJiang[11]= help_man2[11]
  //console.log(Gstr)
	return Gstr;
  }

   //??????
	qiKe(time) 
	{
		this.init()
		var _buffer = "";
		var o_doc_write = console.log;

		var d = new Date(time);
		var g = 1;

		return this.LuiYin(d.getFullYear(),d.getMonth()+1,d.getDate(),d.getHours(),d.getMinutes(),d.getSeconds(),'n');
	}
	/*****
	 * ???????????????????????????????????????????????????
	 * ?????????perturbation??????????????????
	 */
	Perturbation(jdez)
	{
	  var t=(jdez-2451545)/36525;
	  var s=0;
	  var ptsa = new Array(485, 203, 199, 182, 156, 136, 77, 74, 70, 58, 52, 50, 45, 44, 
		29, 18, 17, 16, 14, 12, 12, 12, 9, 8);
	  var ptsb = new Array(324.96, 337.23, 342.08, 27.85, 73.14, 171.52, 222.54, 296.72, 
		243.58, 119.81, 297.17, 21.02, 247.54, 325.15, 60.93, 155.12, 288.79, 198.04, 199.76, 
		95.39, 287.11, 320.81, 227.73, 15.45);
	  var ptsc = new Array(1934.136, 32964.467, 20.186, 445267.112, 45036.886, 22518.443, 
		65928.934, 3034.906, 9037.513, 33718.147, 150.678, 2281.226, 29929.562, 31555.956, 
		4443.417, 67555.328, 4562.452, 62894.029, 31436.921, 14577.848, 31931.756, 34777.259, 
		1222.114, 16859.074);
	  for(var k=0;k<=23;k++){
		s=s+ptsa[k]*Math.cos(ptsb[k]*2*Math.PI/360+ptsc[k]*2*Math.PI/360*t);
	  }
	  var w=35999.373*t-2.47;
	  var l=1+0.0334*Math.cos(w*2*Math.PI/360)+0.0007*Math.cos(2*w*2*Math.PI/360);
	  var ptb=0.00001*s/l;
	  return ptb;
	}

	f_DeltaT(yy,mm)
	{
	  var u, t, dt, y;
	  y = yy + (mm - 0.5) / 12;
  
	  if(y<=-500){	
		u = (y - 1820) / 100;
		dt = (-20 + 32*u*u);}
	  else{if(y< 500){
		u = y / 100;
		dt=(10583.6-1014.41*u+33.78311*u*u-5.952053*u*u*u-0.1798452*u*u*u*u+0.022174192*u*u*u*u*u+0.0090316521*u*u*u*u*u*u);}
	  else{if(y<1600){
		u = (y - 1000) / 100;
		dt = (1574.2-556.01*u+71.23472*u*u+0.319781*u*u*u-0.8503463*u*u*u*u-0.005050998*u*u*u*u*u+ 0.0083572073*u*u*u*u*u*u);}
	  else{if(y<1700){
		t = y - 1600;
		dt = (120 - 0.9808 * t - 0.01532 * t*t + t*t*t / 7129);}
	  else{if(y<1800){
		t = y - 1700;
		dt = (8.83 + 0.1603 * t - 0.0059285 * t*t + 0.00013336 * t*t*t - t*t*t*t / 1174000);}
	  else{if(y<1860){
		t = y - 1800;
		dt=(13.72-0.332447*t+0.0068612*t*t+0.0041116*t*t*t-0.00037436*t*t*t*t+0.0000121272*t*t*t*t*t-0.0000001699*t*t*t*t*t*t+ 0.000000000875*t*t*t*t*t*t*t);}
	  else{if(y<1900){
		t = y - 1860;
		dt = (7.62 + 0.5737 * t - 0.251754 * t*t + 0.01680668 * t*t*t - 0.0004473624 * t*t*t*t + t*t*t*t*t / 233174);}
	  else{if(y<1920){
		t = y - 1900;
		dt = (-2.79 + 1.494119 * t - 0.0598939 * t*t + 0.0061966 * t*t*t - 0.000197 * t*t*t*t);}
	  else{if(y<1941){
		t = y - 1920;
		dt = (21.2 + 0.84493 * t - 0.0761 * t*t + 0.0020936 * t*t*t);}
	  else{if(y<1961){
		t = y - 1950;
		dt = (29.07 + 0.407 * t - t*t / 233 + t*t*t / 2547);}
	  else{if(y<1986){
		t = y - 1975;
		dt = (45.45 + 1.067 * t - t*t / 260 - t*t*t / 718);}
	  else{if(y<2005){
		t = y - 2000;
		dt = (63.86 + 0.3345 * t - 0.060374 * t*t + 0.0017275 * t*t*t + 0.000651814 * t*t*t*t + 0.00002373599 * t*t*t*t*t);}
	  else{if(y<2050){
		t = y - 2000;
		dt = (62.92 + 0.32217 * t + 0.005589 * t*t);}
	  else{if(y<2150){
		u = (y - 1820) / 100;
		dt = (-20 + 32*u*u-0.5628*(2150 - y));}
	  else{
		u = (y - 1820) / 100;
		dt = (-20 + 32*u*u);}}}}}}}}}}}}}}
  
	  if(y<1955 || y>=2005) dt=dt-(0.000012932*(y-1955)*(y-1955));
	  var DeltaT = dt / 60;    //??????????????????
	  return DeltaT;
	}

}
var e = new SixCourseModule()
module.exports=e;  