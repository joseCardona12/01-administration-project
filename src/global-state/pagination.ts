import {create} from 'zustand';

interface IPaginationState{
    contentPage: IContentPage
    setContentPage: ({page,totalPage}: IContentPage) => void
}

interface IContentPage{
    page:number,
    totalPage:number,
}

export const usePaginationState = create<IPaginationState>((set) => ({
    contentPage: {
        page: 1,
        totalPage: 1
    },
    setContentPage: ({page,totalPage}: IContentPage) => set({ contentPage: {page,totalPage} }),
}))