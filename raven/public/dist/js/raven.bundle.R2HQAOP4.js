(() => {
  // frappe-html:/Users/saurabh/Desktop/exacuer2/erpnext/frappe-bench/apps/raven/raven/public/js/templates/send_message.html
  frappe.templates["send_message"] = `<div class="timeline-message-box" style="padding: 2px; overflow: hidden;">
    <div class="message-header"
        style="align-items: flex-start; margin-bottom: 10px; display: flex; flex-direction: column;">
        <div class="actions" style="flex-shrink: 0; display: flex; align-items: center; padding-bottom: 4px; padding-left: 2px;">

            {% if (is_direct_message) { %}
            <span style="font-weight: 500; font-size: 12px;">Direct Message with &nbsp;</span>
            {% } %}

            <a class="action-btn" href="/raven/channel/{{channel_id}}" title="Open {{ channel_name }}" target="_blank"
                style="text-decoration: underline; font-weight: 500; font-size: 12px; margin: 0;">
                {% if (is_direct_message) { %}
                <!-- split the channel_name check the  userID with owner theone which is not same display it's full_name -->
                {%var users = channel_name.split('_') %}
                {% var user_one = users[0].trim()%}
                {% var user_two = users[1].trim()%}
                {% if (user_one === owner) { %}
                {{peer_user}}
                {% } else { %}
                {{peer_user}}
                {% }%}
                {%} else { %}
                {% if(type == "Open"){ %}
                <i class="fa fa-globe"></i>
                {% } else if(type == "Private"){ %}
                <i class="fa fa-lock"></i>
                {% } else if(type == "Public"){ %}
                <i class="fa fa-hashtag"></i>
                {% } %}
                {{ channel_name }}
                {%} %}
            </a>
            <span class="text-muted" style="font-size: 12px; margin-left: 2px;">
                &nbsp;- {{ comment_when(creation) }}
            </span>

        </div>
        <div class="user-info" style="display: flex; align-items: flex-start;">
            <div class="user-avatar" style="flex-shrink: 0;">
            {{ frappe.avatar(owner, "avatar-medium") }}
            </div>
            <div class="user-details"
                style="display: flex; flex-direction: column; align-items: flex-start; margin-left: 8px; width: 90%;">
                <span style="font-weight: bold;">
                    {{ full_name || frappe.user.full_name(owner) }}
                </span>
                <span
                    style="font-weight: normal; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">
                    {{text}}
                </span>
            </div>
        </div>
        </div>
        {% if (file && file.length) { %}
    <div style="margin-top: 10px">
        <div class="ellipsis flex">
            <a href="{%= encodeURI(file).replace(/#/g, '%23') %}" class="text-muted small" target="_blank"
                rel="noopener noreferrer">
                <svg viewBox="0 0 16 16" class="icon icon-xs" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14 7.66625L8.68679 12.8875C7.17736 14.3708 4.64151 14.3708 3.13208 12.8875C1.62264 11.4042 1.62264 8.91224 3.13208 7.42892L7.84151 2.80099C8.9283 1.733 10.6189 1.733 11.7057 2.80099C12.7925 3.86897 12.7925 5.53028 11.7057 6.59827L7.35849 10.8109C6.75472 11.4042 5.78868 11.4042 5.24528 10.8109C4.64151 10.2176 4.64151 9.26823 5.24528 8.73424L8.86792 5.17429"
                    stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" />
                </svg>
            {%= file.split("/").slice(-1)[0] %}
            <svg class="icon icon-xs" style="color: var(--yellow-300)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M8.077 1.45h-.055a3.356 3.356 0 00-3.387 3.322v.35H3.75a2 2 0 00-2 2v5.391a2 2 0 002 2h8.539a2 2 0 002-2V7.122a2 2 0 00-2-2h-.885v-.285A3.356 3.356 0 008.082 1.45h-.005zm2.327 3.672V4.83a2.356 2.356 0 00-2.33-2.38h-.06a2.356 2.356 0 00-2.38 2.33v.342h4.77zm-6.654 1a1 1 0 00-1 1v5.391a1 1 0 001 1h8.539a1 1 0 001-1V7.122a1 1 0 00-1-1H3.75zm4.27 4.269a.573.573 0 100-1.147.573.573 0 000 1.147zm1.573-.574a1.573 1.573 0 11-3.147 0 1.573 1.573 0 013.147 0z"
                    fill="currentColor" stroke="currentColor"></path>
            </svg>
            </a>
            </div>
    </div>
    {% } %}
</div>`;

  // ../raven/raven/public/js/timeline_button.js
  $(document).on("app_ready", function() {
    $.each(frappe.boot.user.can_read, function(i, doctype) {
      let buttonAdded = false;
      frappe.ui.form.on(doctype, {
        refresh: function(frm) {
          var _a, _b;
          if (!frm.is_new()) {
            if (((_b = (_a = frm.footer) == null ? void 0 : _a.frm) == null ? void 0 : _b.timeline) && !buttonAdded) {
              let send_message_modal = (channels) => {
                if (channels && channels.message && channels.message.length > 0) {
                  let channel_id = [];
                  let dm_list = [];
                  let channel_list = [];
                  channels.message.forEach((channel) => {
                    if (channel.is_direct_message) {
                      dm_list.push(channel.full_name);
                      channel_id.push({
                        value: channel.name,
                        name: channel.full_name
                      });
                    } else {
                      channel_list.push(channel.channel_name);
                      channel_id.push({
                        value: channel.name,
                        name: channel.channel_name
                      });
                    }
                  });
                  let setup_attach = () => {
                    const fields = dialog.fields_dict;
                    const attach = $(fields.select_attachments.wrapper);
                    if (!frm.attachments) {
                      frm.attachments = [];
                    }
                    let args = {
                      folder: "Home/Attachments",
                      on_success: (attachment) => {
                        frm.attachments.push(attachment);
                        render_attachment_rows();
                      }
                    };
                    if (frm) {
                      args = {
                        doctype: frm.doctype,
                        docname: frm.docname,
                        folder: "Home/Attachments",
                        on_success: (attachment) => {
                          frm.attachments.attachment_uploaded(attachment);
                          render_attachment_rows();
                        }
                      };
                    }
                    $(`
                    <label class="control-label">
                      ${__("Select Attachments")}
                    </label>
                    <div class='attach-list'></div>
                    <p class='add-more-attachments'>
                      <button class='btn btn-xs btn-default'>
                        ${frappe.utils.icon("small-add", "xs")}&nbsp;
                        ${__("Add Attachment")}
                      </button>
                    </p>
                  `).appendTo(attach.empty());
                    attach.find(".add-more-attachments button").on("click", () => new frappe.ui.FileUploader(args));
                    render_attachment_rows();
                  };
                  let render_attachment_rows = (attachment) => {
                    const select_attachments = dialog.fields_dict.select_attachments;
                    const attachment_rows = $(select_attachments.wrapper).find(
                      ".attach-list"
                    );
                    attachment_rows.empty();
                    if (attachment) {
                      attachment_rows.append(
                        get_attachment_row(attachment, true)
                      );
                    } else {
                      let files = [];
                      if (frm.attachments && frm.attachments.length) {
                        files = files.concat(
                          frm.attachments.filter((attachment2, index, array) => {
                            return !array.slice(0, index).some(
                              (obj) => obj.file_name === attachment2.file_name
                            );
                          })
                        );
                      }
                      if (frm) {
                        files = files.concat(frm.get_files());
                        files = files.filter((attachment2, index, array) => {
                          return !array.slice(0, index).some(
                            (obj) => obj.file_name === attachment2.file_name
                          );
                        });
                      }
                      if (files.length) {
                        $.each(files, (i2, f) => {
                          if (!f.file_name)
                            return;
                          if (!attachment_rows.find(`[data-file-name="${f.name}"]`).length) {
                            f.file_url = frappe.urllib.get_full_url(f.file_url);
                            attachment_rows.append(get_attachment_row(f));
                          }
                        });
                      }
                    }
                  };
                  let get_attachment_row = (attachment, checked) => {
                    const radioGroupName = "attachmentRadioGroup";
                    return $(`
                    <p class="flex">
                      <label class="attachment-radio">
                        <input type="radio" name="${radioGroupName}"
                               data-file-name="${attachment.name}" ${checked ? "checked" : ""}>
                        </input>
                        <span class="ellipsis">${attachment.file_name}</span>
                      </label>
                      &nbsp;
                      <a href="${attachment.file_url}" target="_blank" class="btn-linkF">
                        ${frappe.utils.icon("link-url")}
                      </a>
                    </p>`);
                  };
                  let get_attachments = () => {
                    const selected_attachment = $(dialog.wrapper).find("[data-file-name]:checked").attr("data-file-name");
                    return selected_attachment ? selected_attachment : "";
                  };
                  let dialog;
                  if (!dialog) {
                    dialog = new frappe.ui.Dialog({
                      title: __("Send a Raven"),
                      fields: [
                        {
                          fieldname: "type",
                          label: "Type",
                          fieldtype: "Select",
                          options: ["DM", "Channel"],
                          default: "Channel",
                          onchange: function() {
                            let field = dialog.get_field("channel");
                            if (this.value === "DM") {
                              field.df.options = dm_list;
                            } else {
                              field.df.options = channel_list;
                            }
                            field.refresh();
                          }
                        },
                        {
                          fieldname: "channel",
                          label: "Channel/DM",
                          fieldtype: "Select",
                          options: channel_list,
                          reqd: 1
                        },
                        {
                          fieldname: "message",
                          label: "Message",
                          fieldtype: "Long Text"
                        },
                        { fieldtype: "Section Break" },
                        {
                          label: __("Select Attachments"),
                          fieldtype: "HTML",
                          fieldname: "select_attachments"
                        }
                      ],
                      primary_action_label: __("Send"),
                      primary_action(values) {
                        let attachments = get_attachments();
                        send_message(values, channel_id, attachments);
                        dialog.hide();
                      },
                      secondary_action_label: __("Discard"),
                      secondary_action() {
                        dialog.hide();
                      },
                      minimizable: true
                    });
                  }
                  setup_attach();
                  dialog.show();
                } else {
                  frappe.msgprint({
                    title: __("Send a Raven"),
                    indicator: "blue",
                    message: __("No channels found")
                  });
                }
              };
              let get_channels = () => {
                return frappe.call({
                  method: "raven.api.raven_channel.get_channels",
                  args: {
                    hide_archived: true
                  },
                  callback: function(r) {
                    if (r && r.message) {
                      return r.message;
                    }
                  }
                });
              };
              let send_message = (values, channel_id, attachments) => {
                let channel = channel_id.find(
                  (channel2) => channel2.name == values.channel
                ).value;
                let message = values.message;
                let get_type = (url) => {
                  if (url) {
                    let fileExt = [
                      "jpg",
                      "JPG",
                      "jpeg",
                      "JPEG",
                      "png",
                      "PNG",
                      "gif",
                      "GIF"
                    ];
                    let ext = url.split(".").pop();
                    if (fileExt.includes(ext)) {
                      return "Image";
                    } else {
                      return "File";
                    }
                  }
                  return "Text";
                };
                frappe.db.get_value("File", { name: attachments }, "file_url").then((res) => {
                  var _a2, _b2;
                  return frappe.db.insert({
                    doctype: "Raven Message",
                    channel_id: channel,
                    text: message,
                    json: {
                      "content": [
                        {
                          "content": [
                            {
                              "text": message,
                              "type": "text"
                            }
                          ],
                          "type": "paragraph"
                        }
                      ],
                      "type": "doc"
                    },
                    message_type: get_type((_a2 = res == null ? void 0 : res.message) == null ? void 0 : _a2.file_url),
                    file: ((_b2 = res == null ? void 0 : res.message) == null ? void 0 : _b2.file_url) || "",
                    link_doctype: frm.doctype,
                    link_document: frm.docname
                  });
                }).then(() => {
                  frm.reload_doc();
                  frappe.show_alert({
                    message: __("Message sent"),
                    indicator: "green"
                  });
                  frappe.utils.play_sound("email");
                }).catch((err) => {
                  frappe.throw(__("Error sending message"));
                });
              };
              let send_raven = () => {
                get_channels().then((channels) => send_message_modal(channels));
              };
              var timeline = frm.footer.frm.timeline;
              timeline.add_action_button(
                __("Send a Raven"),
                send_raven,
                "share",
                "btn-secondary send-raven-button"
              );
              buttonAdded = true;
            }
          }
        }
      });
    });
  });

  // ../raven/raven/public/js/raven.bundle.js
  $(document).on("app_ready", function() {
    if (frappe.boot.show_raven_chat_on_desk && frappe.user.has_role("Raven User")) {
      if (frappe.is_mobile()) {
        return;
      }
      let main_section = $(document).find(".main-section");
      main_section.css("padding-bottom", "60px");
      let chat_element = $(document.createElement("div"));
      chat_element.addClass("raven-chat");
      main_section.append(chat_element);
      frappe.require("raven_chat.bundle.jsx").then(() => {
        frappe.raven_chat = new frappe.ui.RavenChat({
          wrapper: chat_element
        });
      });
    }
  });
})();
//# sourceMappingURL=raven.bundle.R2HQAOP4.js.map
