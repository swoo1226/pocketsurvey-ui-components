/* eslint-disable semi */
import merge from "lodash/merge"
import cloneDeep from "lodash/cloneDeep"
import { EChartsOption } from "echarts"
import {defaultOption} from "../options/index"

type deepMergePropsType = {
    option: EChartsOption,
    override?: EChartsOption
}

const deepMerge = ({option, override}:deepMergePropsType):EChartsOption => {
  console.log("option:",merge(cloneDeep(defaultOption), option))
  if(override) return merge(cloneDeep(defaultOption), option, override)    
  else return merge(cloneDeep(defaultOption), option)
}

export default deepMerge;