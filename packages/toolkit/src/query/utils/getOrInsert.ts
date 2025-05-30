export function getOrInsert<K extends object, V>(
  map: WeakMap<K, V>,
  key: K,
  value: V,
): V
export function getOrInsert<K, V>(map: Map<K, V>, key: K, value: V): V
export function getOrInsert<K extends object, V>(
  map: Map<K, V> | WeakMap<K, V>,
  key: K,
  value: V,
): V {
  if (map.has(key)) return map.get(key) as V

  return map.set(key, value).get(key) as V
}
