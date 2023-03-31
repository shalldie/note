package note

import (
	"strings"

	"github.com/gdamore/tcell/v2"
	"github.com/rivo/tview"
)

type SidebarPanel struct {
	*BasePanel
	List    *tview.List       // 列表组件
	NewItem *tview.InputField // 新加项组件
	Files   []string          // 文件名列表
}

func NewSidebarPanel() *SidebarPanel {
	p := &SidebarPanel{
		BasePanel: NewBasePanel(),
		List: tview.NewList().ShowSecondaryText(false).SetHighlightFullLine(true).
			SetSelectedStyle(
				tcell.Style{}.Background(tcell.ColorBlue),
			),
		NewItem: makeLightTextInput(" + [新建文件] "),
	}

	// 组件
	p.SetTitle("文件")
	p.AddItem(p.List, 0, 1, true).AddItem(p.NewItem, 1, 0, false)
	p.AddTip(strings.Join([]string{
		"新建：N",
		"编辑：E",
		"删除：D",
	}, " ; "), "")

	// 兼容 powerlevel10k
	p.List.SetBorderPadding(0, 0, 1, 1)
	p.NewItem.SetBorderPadding(0, 0, 1, 1)

	// 事件 - list
	p.SetFocusFunc(func() {
		p.SetFocus()
	})

	return p
}

func (p *SidebarPanel) LoadFiles() {
	go func() {
		g.Setup()
		p.List.Clear()
		p.Files = make([]string, 0)

		for fileName := range g.Model.Files {
			p.Files = append(p.Files, fileName)
			p.List.AddItem(" - "+fileName, "", 0, func() {
				view.LoadFile(fileName)
			})
		}

		if len(p.Files) > 0 {
			view.LoadFile(p.Files[0])
		}

		app.Draw()
	}()
}
