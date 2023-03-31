package note

import (
	"fmt"

	"github.com/rivo/tview"
	"github.com/shalldie/tnote/gist"
)

// 放全局，方便引用，，，反正是单例
var (
	app     *tview.Application
	g       *gist.Gist
	sidebar *SidebarPanel
	view    *ViewPanel
)

type TNote struct {
	Gist      *gist.Gist
	App       *tview.Application // 应用
	Pages     *tview.Pages       // pages
	Modal     *tview.Modal       // page - 弹框
	Layout    *tview.Flex        // page - 主容器
	Sidebar   *SidebarPanel      // 侧边栏
	View      *ViewPanel         // 右边视图
	StatusBar *StatusBar         // 状态栏
}

func NewTNote(token string) *TNote {
	note := &TNote{
		Gist: gist.NewGist(token),
	}
	g = note.Gist
	return note
}

func (t *TNote) Setup() {

	fmt.Println("loading...")

	t.initLayout()

	// t.Gist.Setup()
	t.Sidebar.LoadFiles()

	if err := t.App.SetRoot(t.Pages, true).SetFocus(t.Sidebar).Run(); err != nil {
		panic(err)
	}
}

func (t *TNote) initLayout() {
	// app
	app = tview.NewApplication().EnableMouse(true)
	t.App = app

	// pages
	t.Layout = tview.NewFlex().SetDirection(tview.FlexRow)
	t.Modal = tview.NewModal().AddButtons([]string{"确定", "取消"})

	t.Pages = tview.NewPages().
		AddPage("main", t.Layout, true, true).
		AddPage("modal", t.Modal, true, false)

	splitItem := createSplitItem()

	// layout - 上 - 左中右
	t.Sidebar = NewSidebarPanel()
	sidebar = t.Sidebar
	t.View = NewViewPanel()
	view = t.View
	content := tview.NewFlex().
		AddItem(splitItem, 1, 1, false).
		AddItem(t.Sidebar, 36, 1, false).
		AddItem(splitItem, 1, 1, false).
		AddItem(t.View, 0, 1, false).
		AddItem(splitItem, 1, 1, false)

	//
	// layout - 下
	t.StatusBar = NewStatusBar()

	t.Layout.AddItem(content, 0, 1, false).
		AddItem(
			tview.NewFlex().
				AddItem(splitItem, 2, 1, false).
				AddItem(t.StatusBar, 0, 1, false).
				AddItem(splitItem, 2, 1, false),
			1, 1, false)
}
