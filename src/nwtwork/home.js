import {request} from "@/nwtwork/network";

export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  })
}
