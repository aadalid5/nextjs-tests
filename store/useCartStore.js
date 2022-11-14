import create from 'zustand';

const useCart = create((set)=>({
    total: 10,
    setTotal: (value)=>set(()=>({total:value}))
}))

export default useCart;