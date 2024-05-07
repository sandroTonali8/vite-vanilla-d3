import { axisBottom, axisLeft } from 'd3';
import './constants'
import { svg, dataY, x, dataX, y, marginLeft, maxY, marginTop, unitY } from './constants';

// 选择 svg 容器
svg
  .selectAll("rect")
  .data(dataY)
  .enter()
  .append("rect")
  .style("fill","steelblue" )
  .attr("x",(d,i)=> x(dataX[i]) as number)
  .attr("y",d => maxY - (y(d) - marginTop) > 0 ? y(d) : maxY + marginTop )
  .attr("width", x.bandwidth())
  .attr("height",d => Math.abs(maxY - (y(d) - marginTop)) );

svg.append('g')
  .attr('transform', `translate(0, ${marginTop + maxY})`)
  .call(axisBottom(x).tickSizeOuter(0));

svg.append('g')
  .attr('transform', `translate(${marginLeft}, 0)`)
  .call(axisLeft(y))

svg.append('text')  // 添加text元素
  .attr('x', 25)   // 设置文字的x坐标，这里设置为矩形宽度的一半
  .attr('y', 10)   // 设置文字的y坐标，这里设置为矩形高度的一半
  .attr('dy', '.35em')  // 垂直居中对齐
  .style('text-anchor', 'middle')  // 水平居中对齐
  .style('font-size', 10)
  .style('fill', 'black')
  .style('z-index', 1) 
  .text(unitY);  // 设置显示的文字内容