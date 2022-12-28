import { isArray } from '../is'
import type { TreeAddLevelReturn } from './interface'
import type { TreeData, TreeDataItem } from '../../tree'

/**
 * 扁平化树形结构
 *
 * @param data 树形数据
 * @returns
 */
export const treeToFlat = (data: TreeData): TreeAddLevelReturn[] => {
  const result: TreeAddLevelReturn[] = []

  data.forEach((item: TreeDataItem): void => {
    const obj: TreeAddLevelReturn = {
      // label: item.label,
      // level: item.level,
      // index: item.level,
      // show: item.show
      ...item
    } as TreeAddLevelReturn

    result.push(obj)

    if (item.children) {
      result.push(...treeToFlat(item.children))
    }
  })

  return result
}

/**
 * 给 tree 添加 level 层级标注
 *
 * @param tree 树形数据
 * @returns
 */
export const treeAddLevel = (tree: TreeData): TreeData => {
  if (!isArray(tree)) return []

  const recursive = (array: TreeData, level = 0): TreeData => {
    level++

    console.log(12121212)

    return array.map((item: TreeDataItem, index): TreeDataItem => {
      item.level = level
      // item.show = true

      const child: TreeData = item.children as TreeData

      if (child && child.length) {
        recursive(child, level)
      }

      return item
    })
  }

  return recursive(tree)
}

export const addId = (arr, parentId = '') => {
  arr.forEach((item, i) => {
    if (item.children && item.children.length) {
      item.id = Number(`${parentId}${i + 1}`)
      addId(item.children, Number(`${parentId}${i + 1}`))
    } else {
      item.id = Number(`${parentId}${i + 1}`)
    }
  })

  return arr
}

export const addParentId = arr => {
  arr.forEach(item => {
    const p = item.id

    if (item.children && item.children.length) {
      item.children.forEach(z => {
        z.parentId = p

        if (z.children && z.children.length) {
          addParentId(item.children)
        }
      })
    }
  })

  return arr
}
